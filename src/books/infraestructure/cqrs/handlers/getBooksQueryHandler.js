const Repo = require('../../bookRepository');
const GetBooksService = require('../../../application/getBooksService');

module.exports = class CreateBookCommandHandler {
  constructor(query) {
    this.query = query;
  }

  async handle() {
    const repository = new Repo();
    const bookService = new GetBooksService(repository);
    return await bookService.getBooksForUser(this.query.user);
  }
};
