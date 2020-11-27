const Repository = require('../../common/persistence/Repository');
const {BookModel} = require('../../configuration/DatabaseConfiguration');

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

    async isBookOfUser(bookId, user)
    {
        let book = await this._collection.findById(bookId);
        return book.user._id.equals(user._id);
    }

}