
module.exports = class CreateBookService {

    constructor(repository)
    {
        this._repository = repository;
    }

    async create(entityToCreate)
    {
        return await this._repository.create(entityToCreate);
    }

}