const NoteRepository = require('../../noteRepository');
const BookRepository =
    require('../../../../books/infraestructure/bookRepository');
const DeleteNoteService = require('../../../application/deleteNoteService');

module.exports = class DeleteNoteCommandHandler {
  constructor(command) {
    this.command = command;
  }

  async handle() {
    const rep = new NoteRepository();
    const bookRep = new BookRepository();


    const note = await rep.get(this.command.noteId);

    const service = new DeleteNoteService(
        rep,
        bookRep,
        this.command.userAuthenticated,
    );

    return await service.deleteNote(note);
  }
};
