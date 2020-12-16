
const QueryBus = require('../../common/queryBus');
const CommandBus = require('../../common/commandBus');
const CreateNoteCommand = require('./cqrs/commands/createNoteCommand');
const EditNoteCommand = require('./cqrs/commands/editNoteCommand');
const DeleteNoteCommand = require('./cqrs/commands/deleteNoteCommand');
const User = require('../../auth/domain/user');

module.exports = class NotesController {
  static async note_post(req, res, next) {
    try {
      const bookId = req.params.bookId;
      const createNoteCommand = new CreateNoteCommand(req.body.title, req.body.body, bookId, req.user);
      await CommandBus.instance.dispatch(createNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(201).send('Created');
  }

  static async note_edit_put(req, res, next) {
    try {
      const editNoteCommand = new EditNoteCommand(req.params.noteId, req.body.title, req.body.body, req.user);
      await CommandBus.instance.dispatch(editNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(200).send('Modified');
  }

  static async note_delete(req, res, next) {
    try {
      const deleteNoteCommand = new DeleteNoteCommand(req.params.noteId, req.user);
      await CommandBus.instance.dispatch(deleteNoteCommand);
    } catch (error) {
      return next(error);
    }
    return res.status(200).send('Deleted');
  }
};
