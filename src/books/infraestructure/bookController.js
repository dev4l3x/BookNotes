const CreateBookCommand = require('../infraestructure/createBookCommand')
const CommandBus = require('../../common/commandBus');

module.exports = class BookController {

    static async book_create_post(req, res) {
        let command = new CreateBookCommand(req.body.title);
        try{
            await CommandBus.instance.dispatch(command);
        }
        catch(error)
        {
            throw new Error();
        }
        res.status(201).send('Created');
    }
}