const CreateBookCommand = require('../infraestructure/createBookCommand')
const CommandBus = require('../../common/commandBus');

module.exports = class BookController {

    static async book_create_post(req, res, next) {
        let command = new CreateBookCommand(req.body.title);
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