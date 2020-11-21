
const QueryBus = require('../../common/queryBus');
const CommandBus = require('../../common/commandBus');
const CreateNoteCommand = require('./cqrs/commands/createNoteCommand');
const User = require('../../auth/domain/user');

module.exports = class NotesController {

    static async note_post(req, res, next) {
        try{
            let bookId = req.params.bookId;
            let createNoteCommand = new CreateNoteCommand(req.body.title, req.body.body, bookId, req.user);
            await CommandBus.instance.dispatch(createNoteCommand);
        }
        catch(error)
        {
            return next(error);
        }
        return res.status(201).send("Created");
    }   

}