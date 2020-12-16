const EditNoteService = require('../../../application/editNoteService');
const Note = require('../../../domain/note');
const NoteRepository = require('../../noteRepository');
const BookRepository = require('../../../../books/infraestructure/bookRepository');
const AuthError = require('../../../../common/exceptions/authenticationError');
// const Rep = require('../../../../common/persistence/Repository');
// const {UserModel} = require('../../../../configuration/DatabaseConfiguration');

module.exports = class EditNoteCommandHandler {
  constructor(command) {
    this.command = command;
  }

  async handle() {
    const rep = new NoteRepository();
    const bookRep = new BookRepository();

    const note = new Note(
        {
          title: this.command.title,
          body: this.command.body,
          id: this.command.noteId,
        },
    );

    const retrievedNote = await rep.get(note.id);

    if (!(await bookRep.isBookOfUser(retrievedNote.book, this.command.userAuthenticated))) {
      throw new AuthError('User authenticated cannot create notes on this book.');
    }

    const service = new EditNoteService(rep);
    return await service.editNote(note);
  }
};
