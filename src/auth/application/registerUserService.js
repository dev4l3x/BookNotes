
const crypto = require('crypto');
const User = require('../domain/user');

module.exports = class RegisterUserService {
    constructor(repository)
    {
        this._rep = repository;
    }

    async register(user)
    {
        const clearUserPassword = user.password;
        user.password = crypto.createHash('sha1').update(clearUserPassword).digest('hex');
        return await this._rep.create(user);
    }
}