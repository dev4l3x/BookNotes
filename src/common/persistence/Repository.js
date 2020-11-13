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

    create(entity)
    {
        let model = new this._collection();
        Object.assign(model, entity);
        model.save();
        return model;
    }

}