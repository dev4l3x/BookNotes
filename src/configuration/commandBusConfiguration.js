const CommandBus = require('../common/commandBus');
const CreateBookCommand = require('../books/infraestructure/createBookCommand');
const CreateBookCommandHandler = require('../books/infraestructure/createBookCommandHandler');
const RegisterCommand = require('../auth/infraestructure/registerCommand');
const RegisterCommandHandler = require('../auth/infraestructure/registerCommandHandler');

module.exports = function configureCommandBus()
{
    CommandBus.instance.addCommandHandler(CreateBookCommand.name, CreateBookCommandHandler);
    CommandBus.instance.addCommandHandler(RegisterCommand.name, RegisterCommandHandler);
}