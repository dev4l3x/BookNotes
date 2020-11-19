
const UserRepo = require('../../userRepository');
const {UserModel} = require('../../../../configuration/DatabaseConfiguration');
const User = require('../../../domain/user');
const AuthService = require('../../../application/authenticateUserService');

module.exports = class GetTokenQueryHandler {
    constructor(command)
    {
        this.command = command;
    }

    async handle(){
        const rep = new UserRepo();
        const user = new User(this.command.username, this.command.password);
        const service = new AuthService(rep);
        return await service.authenticate(user);
    }
}