const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = class AuthenticateUserService{

    constructor(repository)
    {
        this._rep = repository;
    }

    async authenticate(user)
    {
        user.password = crypto.createHash('sha1').update(user.password).digest('hex');
        const retrievedUser = await this._rep.findUserByUsernameAndPasswordOrNull(user);
        if(retrievedUser)
        {
            const token = jwt.sign(
                {
                    role: 'user',
                    userId: retrievedUser._id
                }, 
                process.env.APP_SECRET, 
                { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_IN_SECONDS) }
            );
            return { authorized: true, token: token };
        }

        return {authorized: false};
    }

}