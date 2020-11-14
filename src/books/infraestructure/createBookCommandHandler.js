const CreateBookService = require('./../application/createBookService');
const Repo = require('./../../common/persistence/Repository');
const { BookModel } = require('./../../configuration/DatabaseConfiguration');
const Book = require('../domain/book');

module.exports = class CreateBookCommandHandler{
    constructor(command)
    {
        this.command = command;
    }

    async handle()
    {
        const repository = new Repo(BookModel);
        const bookService = new CreateBookService(repository);
        const book = new Book();
        book.title = this.command.title;
        await bookService.create(book);
    }
}