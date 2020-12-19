module.exports = class EditBookCommand {
  constructor(book, userAuthenticated) {
    this.book = book;
    this.userAuthenticated = userAuthenticated;
  }
};
