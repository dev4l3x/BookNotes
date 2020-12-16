const BadArgumentError = require('../../common/exceptions/badArgumentError');

module.exports = class CreateBookService {
  constructor(repository) {
    this._repository = repository;
  }

  async create(entityToCreate, userCreator) {
    if (userCreator == null || userCreator == undefined) {
      throw new BadArgumentError('User cannot be empty');
    }
    return await this._repository.createBookForUser(entityToCreate, userCreator);
  }
};
