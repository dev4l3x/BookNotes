const Repo = require('../../bookRepository');
const EditBookService = require('../../../application/editBookService');

module.exports = class EditBookCommandHandler {
  constructor(command) {
    this.command = command;
  }

  async handle() {
    const bookRepository = new Repo();
    const bookService = new EditBookService(
        bookRepository, this.command.userAuthenticated,
    );
    await bookService.updateBook(this.command.book);
  }
};
