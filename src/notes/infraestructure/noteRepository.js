const Repository = require('../../common/persistence/Repository');
const {NoteModel} = require('../../configuration/DatabaseConfiguration');

module.exports = class NoteRepository extends Repository {
    constructor(){
        super(NoteModel);
    }

    async createNoteForBook(note, bookId){
        let model = new this._collection();
        model.title = note.title;
        model.book = bookId;
        model.body = note.body;
        await model.save();
        return model;
    }

}