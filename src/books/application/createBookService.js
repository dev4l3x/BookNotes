
module.exports = class CreateBookService {

    constructor(repository)
    {
        this._repository = repository;
    }

    create(entityToCreate)
    {
        return this._repository.create(entityToCreate);
    }

}