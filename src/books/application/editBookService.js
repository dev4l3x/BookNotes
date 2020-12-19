const BadArgumentError = require('../../common/exceptions/badArgumentError');
const AuthError = require('../../common/exceptions/authenticationError');

module.exports = class EditBookService {
  constructor(bookRepository, userAuthenticated) {
    this._bookRepository = bookRepository;
    this._userAuthenticated = userAuthenticated;
  }

  async updateBook(bookToUpdate) {
    const book = await this._bookRepository.get(bookToUpdate.id);

    if (book === null || book === undefined) {
      throw new BadArgumentError('Book not found');
    }

    const isPropietaryOfBook = await this._bookRepository.isBookOfUser(
        bookToUpdate.id, this._userAuthenticated,
    );
    if (this._userAuthenticated == null ||
       this._userAuthenticated == undefined ||
       !isPropietaryOfBook) {
      throw new AuthError('User is not authenticated' +
                          'or is not authorized to update this book');
    }

    await this._bookRepository.update(bookToUpdate);
  }
};
