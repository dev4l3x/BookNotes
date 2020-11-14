const mongoose = require('mongoose');

module.exports = class Repository {
    
    _collection;


    constructor(model)
    {
        this._collection = model;
    }


    async getAll()
    {
        return this._collection.find().exec();
    }

    async get(id) {
        return this._collection.findById(id).exec();
    }

    async create(entity)
    {
        let model = new this._collection();
        Object.assign(model, entity);
        await model.save();
        return model;
    }

}