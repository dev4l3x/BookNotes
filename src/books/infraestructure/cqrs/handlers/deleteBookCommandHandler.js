const Repo = require('../../bookRepository');
const NotesRepo = require('../../../../notes/infraestructure/noteRepository');
const DeleteBookService = require('../../../application/deleteBookService');

module.exports = class DeleteBookCommandHandler {
  constructor(command) {
    this.command = command;
  }

  async handle() {
    const repository = new Repo();
    const notesRepo = new NotesRepo();
    const deleteService = new DeleteBookService(repository, notesRepo);
    await deleteService.deleteBook(
        this.command.bookId, this.command.userAuthenticated,
    );
  }
};
