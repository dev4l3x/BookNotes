const BadArgumentError = require('../../common/exceptions/badArgumentError');
const AuthError = require('../../common/exceptions/authenticationError');

module.exports = class DeleteBookService {
  constructor(bookRepository, noteRepository) {
    this._bookRepository = bookRepository;
    this._noteRepository = noteRepository;
  }

  async deleteBook(bookId, user) {
    const book = await this._bookRepository.get(bookId);

    if (book === null || book === undefined) {
      throw new BadArgumentError('Book not found');
    }

    const isPropietaryOfBook =
        await this._bookRepository.isBookOfUser(bookId, user);
    if (user == null || user == undefined || !isPropietaryOfBook) {
      throw new AuthError('User is not authenticated' +
                          'or is not authorized to delete this book');
    }

    await this._noteRepository.deleteNotesForBook(book);
    await this._bookRepository.delete(book);
  }
};
