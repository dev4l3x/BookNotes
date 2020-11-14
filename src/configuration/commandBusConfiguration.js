const CommandBus = require('../common/commandBus');
const CreateBookCommand = require('../books/infraestructure/createBookCommand');
const CreateBookCommandHandler = require('../books/infraestructure/createBookCommandHandler');

module.exports = function configureCommandBus()
{
    CommandBus.instance.addCommandHandler(CreateBookCommand.name, CreateBookCommandHandler);
}