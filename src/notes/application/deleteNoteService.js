
const {BadArgError} = require('../../common/exceptions/badArgumentError');

module.exports = class DeleteNoteService {

    constructor(repository, bookRepository)
    {
        this._rep = repository;
        this._bookRep = bookRepository;
    }

    async deleteNote(note)
    {
        let book = await this._bookRep.getBookContainingNote(note);
        let noteFinded = book.notes.find(num => num.equals(note.id));
        let noteIndex = book.notes.indexOf(noteFinded);
        book.notes.splice(noteIndex, 1);
        await this._bookRep.update(book);
        await this._rep.delete(note);
    }
}