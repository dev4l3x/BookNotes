const Repository = require('../../common/persistence/Repository');
const {BookModel} = require('../../configuration/DatabaseConfiguration');
const Book = require('../domain/book');
const mapToTypeFrom = require('../../common/utilities/mapper');

module.exports = class BookRepository extends Repository {
    constructor(){
        super(BookModel);
    }

    async createBookForUser(book, user){
        let model = new this._collection();
        model.title = book.title;
        model.author = book.author;
        model.user = user._id;
        await model.save();
        return model;
    } 

    async getAllBooksOfUser(user){
        let books = await this._collection.find({ user: user._id }).populate('notes');
        await books[0].populate('notes').execPopulate();

        let booksMapped = books.map((book) => {
            return mapToTypeFrom({type: Book, properties:["title", "author", "notes"]}, book);
        
        });

        return booksMapped;
    }

    async isBookOfUser(bookId, user)
    {
        let book = await this._collection.findById(bookId);
        return book.user._id.equals(user._id);
    }

}