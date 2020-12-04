const CreateNoteService = require('../../../application/createNoteService');
const Note = require('../../../domain/note');
const NoteRepository = require('../../noteRepository');
const BookRepository = require('../../../../books/infraestructure/bookRepository');
const AuthError = require('../../../../common/exceptions/authenticationError');
// const Rep = require('../../../../common/persistence/Repository');
// const {UserModel} = require('../../../../configuration/DatabaseConfiguration');

module.exports = class CreateNoteCommandHandler {
    constructor(command)
    {
        this.command = command;
    }

    async handle() {
        const rep = new NoteRepository();
        const bookRep = new BookRepository();

        if(!(await bookRep.isBookOfUser(this.command.book, this.command.userAuthenticated)))
            throw new AuthError("User authenticated cannot create notes on this book.");

        const note = new Note(
            {
                title: this.command.title,
                body: this.command.body
            }
        );

        const service = new CreateNoteService(rep, bookRep);
        return await service.createNoteForBook(note, this.command.book);
    }
}