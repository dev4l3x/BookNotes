
const {BadArgError} = require('../../common/exceptions/badArgumentError');

module.exports = class CreateNoteService {
  constructor(noteRepository, bookRepository) {
    this._noteRepository = noteRepository;
    this._bookRepository = bookRepository;
  }

  async createNoteForBook(note, bookId) {
    if (!bookId) {
      throw new BadArgError('BookId cannot be empty');
    }

    const book = await this._bookRepository.get(bookId);

    const createdNote = await this._noteRepository.createNoteForBook(note, bookId);

    // Cambiar para pushear la nota en vez del id, crear un mapper para el repositorio, para recibiir entidades de mongodb
    book.notes.push(createdNote._id);

    await this._bookRepository.update(book);
  }
};
