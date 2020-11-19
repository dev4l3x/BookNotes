const CreateBookCommand = require('../infraestructure/cqrs/commands/createBookCommand');
const CommandBus = require('../../common/commandBus');
const BadArgumentError = require('../../common/exceptions/badArgumentError');

module.exports = class BookController {

    static async book_create_post(req, res, next) {
        let command = new CreateBookCommand(req.body.title, req.body.author, req.user);
        try{
            await CommandBus.instance.dispatch(command);
        }
        catch(error)
        {
            return next(error);
        }
        return res.status(201).send('Created');
    }
}