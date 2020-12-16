
const NotFoundError = require('../../common/exceptions/notFoundError');
const AuthenticationError = require('../../common/exceptions/authenticationError');

module.exports = class DeleteNoteService {
  constructor(repository, bookRepository, currentUser) {
    this._rep = repository;
    this._bookRep = bookRepository;
    this._currentUser = currentUser;
  }

  async deleteNote(note) {
    if (note === null || note === undefined) {
      throw new NotFoundError('Note not found');
    }

    const book = await this._bookRep.getBookContainingNote(note);
    const isBookOfCurrentUser = await this._bookRep.isBookOfUser(book.id, this._currentUser);
    if (!isBookOfCurrentUser) {
      throw new AuthenticationError('User authenticated cannot delete notes on this book.');
    }

    const noteFinded = book.notes.find((num) => num.id === note.id);
    const noteIndex = book.notes.indexOf(noteFinded);
    book.notes.splice(noteIndex, 1);
    await this._bookRep.update(book);
    await this._rep.delete(note);
  }
};
