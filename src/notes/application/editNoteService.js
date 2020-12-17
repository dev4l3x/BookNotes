
module.exports = class CreateNoteService {
  constructor(repository) {
    this._rep = repository;
  }

  async editNote(note) {
    await this._rep.update(note);
  }
};
