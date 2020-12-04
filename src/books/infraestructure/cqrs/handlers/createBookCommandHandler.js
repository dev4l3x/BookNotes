const CreateBookService = require('../../../application/createBookService');
const Repo = require('../../bookRepository')
const Book = require('../../../domain/book');

module.exports = class CreateBookCommandHandler{
    constructor(command)
    {
        this.command = command;
    }

    async handle()
    {
        const repository = new Repo();
        const bookService = new CreateBookService(repository);
        const book = new Book({ title: this.command.title, author: this.command.author });
        await bookService.create(book, this.command.userCreator);
    }
}