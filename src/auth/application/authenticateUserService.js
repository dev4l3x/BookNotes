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
        const exists = await this._rep.existsUser(user);
        if(exists)
        {
            const token = jwt.sign(
                {role: 'user'}, 
                process.env.APP_SECRET, 
                { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_IN_SECONDS) }
            );
            return { authorized: true, token: token };
        }

        return {authorized: false};
    }

}