const Note = require('../../../domain/note');
const NoteRepository = require('../../noteRepository');
const BookRepository = require('../../../../books/infraestructure/bookRepository');
const AuthError = require('../../../../common/exceptions/authenticationError');
const DeleteNoteService = require('../../../application/deleteNoteService');

module.exports = class DeleteNoteCommandHandler {
  constructor(command) {
    this.command = command;
  }

  async handle() {
    const rep = new NoteRepository();
    const bookRep = new BookRepository();


    const note = await rep.get(this.command.noteId);

    const service = new DeleteNoteService(rep, bookRep, this.command.userAuthenticated);

    return await service.deleteNote(note);
  }
};
