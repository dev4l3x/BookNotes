const Repository = require('../../common/persistence/Repository');
const {NoteModel} = require('../../configuration/DatabaseConfiguration');

module.exports = class NoteRepository extends Repository {
    constructor(){
        super(NoteModel);
    }

    async createNoteForBook(note, bookId){
        let model = new this._collection();
        Object.assign(model, {...note, book: bookId });
        await model.save();
        return model;
    }

}