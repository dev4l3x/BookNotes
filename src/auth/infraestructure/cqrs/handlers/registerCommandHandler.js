const RegisterUserService = require('../../../application/registerUserService');
const User = require('../../../domain/user');
const Rep = require('../../../../common/persistence/Repository');
const {UserModel} = require('../../../../configuration/DatabaseConfiguration');

module.exports = class RegisterCommandHandler {
    constructor(command)
    {
        this.command = command;
    }

    async handle() {
        const rep = new Rep(UserModel);
        const user = new User(
            this.command.username, 
            this.command.password, 
            this.command.name, 
            this.command.lastname,
            this.command.email
        );

        const service = new RegisterUserService(rep);
        return await service.register(user);
    }
}