const BadArgError = require('../exceptions/badArgumentError');

module.exports = class Repository {
  constructor(model) {
    this._collection = model;
  }


  async getAll() {
    return await this._collection.find().exec();
  }

  async get(id) {
    return await this._collection.findById(id).exec();
  }

  async create(entity) {
    const model = new this._collection();
    Object.assign(model, entity);
    await model.save();
    return model;
  }

  async update(entity) {
    const model = await this.get(entity.id);
    if (model === null || model === undefined) {
      throw new BadArgError('Does not exists entity with the given id');
    }
    for (const key of Object.keys(entity)) {
      model[key] = entity[key];
    }
    await model.save();
    return model;
  }

  async delete(entity) {
    await this._collection.deleteOne({_id: entity._id});
  }
};
