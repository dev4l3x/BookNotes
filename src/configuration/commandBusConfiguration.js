const CommandBus = require('../common/commandBus');
const CreateBookCommand =
    require('../books/infraestructure/cqrs/commands/createBookCommand');
const CreateBookCommandHandler =
    require('../books/infraestructure/cqrs/handlers/createBookCommandHandler');
const RegisterCommand =
    require('../auth/infraestructure/cqrs/commands/registerCommand');
const RegisterCommandHandler =
    require('../auth/infraestructure/cqrs/handlers/registerCommandHandler');
const CreateNoteCommand =
    require('../notes/infraestructure/cqrs/commands/createNoteCommand');
const CreateNoteCommandHandler =
    require('../notes/infraestructure/cqrs/handlers/createNoteCommandHandler');
const EditNoteCommand =
    require('../notes/infraestructure/cqrs/commands/editNoteCommand');
const EditNoteCommandHandler =
    require('../notes/infraestructure/cqrs/handlers/editNoteCommandHandler');
const DeleteNoteCommand =
    require('../notes/infraestructure/cqrs/commands/deleteNoteCommand');
const DeleteNoteCommandHandler =
    require('../notes/infraestructure/cqrs/handlers/deleteNoteCommandHandler');
const DeleteBookCommandHandler =
    require('../books/infraestructure/cqrs/handlers/deleteBookCommandHandler');
const DeleteBookCommand =
    require('../books/infraestructure/cqrs/commands/deleteBookCommand');
const EditBookCommand =
    require('../books/infraestructure/cqrs/commands/editBookCommand');
const EditBookCommandHandler =
    require('../books/infraestructure/cqrs/handlers/editBookCommandHandler');

module.exports = function configureCommandBus() {
  CommandBus.instance.addCommandHandler(
      CreateBookCommand.name, CreateBookCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      RegisterCommand.name, RegisterCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      CreateNoteCommand.name, CreateNoteCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      EditNoteCommand.name, EditNoteCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      DeleteNoteCommand.name, DeleteNoteCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      DeleteBookCommand.name, DeleteBookCommandHandler,
  );
  CommandBus.instance.addCommandHandler(
      EditBookCommand.name, EditBookCommandHandler,
  );
};
