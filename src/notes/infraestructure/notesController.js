const CommandBus = require('../../common/commandBus');
const CreateNoteCommand = require('./cqrs/commands/createNoteCommand');
const EditNoteCommand = require('./cqrs/commands/editNoteCommand');
const DeleteNoteCommand = require('./cqrs/commands/deleteNoteCommand');

module.exports = class NotesController {
  static async notePost(req, res, next) {
    try {
      const bookId = req.params.bookId;
      const createNoteCommand =
          new CreateNoteCommand(
              req.body.title, req.body.body, bookId, req.user,
          );
      await CommandBus.instance.dispatch(createNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(201).send('Created');
  }

  static async noteEditPut(req, res, next) {
    try {
      const editNoteCommand =
          new EditNoteCommand(
              req.params.noteId, req.body.title, req.body.body, req.user,
          );
      await CommandBus.instance.dispatch(editNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(200).send('Modified');
  }

  static async noteDelete(req, res, next) {
    try {
      const deleteNoteCommand =
          new DeleteNoteCommand(
              req.params.noteId, req.user,
          );
      await CommandBus.instance.dispatch(deleteNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(200).send('Deleted');
  }
};
