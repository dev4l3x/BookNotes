const Repository = require('../../common/persistence/Repository');
const {BookModel} = require('../../configuration/DatabaseConfiguration');

module.exports = class BookRepository extends Repository {
    constructor(){
        super(BookModel);
    }

    async createBookForUser(book, user){
        let model = new this._collection();
        Object.assign(model, book);
        model.user = user._id;
        await model.save();
        return model;
    }
}