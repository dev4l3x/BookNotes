const Book = require('../domain/book');
const CreateBookService = require('../application/createBookService')
const Repo = require('../../common/persistence/Repository')
const { BookModel } = require('../../configuration/DatabaseConfiguration')

module.exports = class BookController {

    static book_create_post(req, res) {
        let book = new Book();
        Object.assign(book, req.body)

        let repository = new Repo(BookModel);

        let bookService = new CreateBookService(repository);
        let createdBook = bookService.create(book);

        console.log(createdBook.toString());

        res.status(201).json(createdBook);
    }
}