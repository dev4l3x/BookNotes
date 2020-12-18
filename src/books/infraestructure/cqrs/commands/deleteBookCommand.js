
module.exports = class DeleteBookCommand {
  constructor(bookId, userAuthenticated) {
    this.bookId = bookId;
    this.userAuthenticated = userAuthenticated;
  }
};
