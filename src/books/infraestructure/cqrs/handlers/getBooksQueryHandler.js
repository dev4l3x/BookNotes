const Repo = require('../../bookRepository')
const Book = require('../../../domain/book');
const GetBooksService = require('../../../application/getBooksService');

module.exports = class CreateBookCommandHandler{
    constructor(query)
    {
        this.query = query;
    }

    async handle()
    {
        const repository = new Repo();
        const bookService = new GetBooksService(repository);
        return await bookService.get_books_for_user(this.query.user);
    }
}