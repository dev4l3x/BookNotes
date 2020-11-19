const Repository = require('../../common/persistence/Repository');
const {UserModel} = require('../../configuration/DatabaseConfiguration');

module.exports = class UserRepository extends Repository {
    constructor(){
        super(UserModel);
    }

    async existsUser(user){
        const retrievedUser = await this._collection.findOne({ 'username': user.username, 'password': user.password });
        return retrievedUser !== undefined && retrievedUser !== null;
    }

    async findUserByUsernameAndPasswordOrNull(user)
    {
        const retrievedUser = await this._collection.findOne({ 'username': user.username, 'password': user.password });
        return retrievedUser || null;
    }
}