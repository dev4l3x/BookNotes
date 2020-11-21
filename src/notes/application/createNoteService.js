
const {BadArgError} = require('../../common/exceptions/badArgumentError');

module.exports = class CreateNoteService {

    constructor(repository)
    {
        this._rep = repository;
    }

    async createNoteForBook(note, bookId)
    {
        if(!bookId)
        {
            throw new BadArgError("BookId cannot be empty");
        }

        await this._rep.createNoteForBook(note, bookId);
    }
}