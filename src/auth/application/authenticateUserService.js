const jwt = require('jsonwebtoken');

module.exports = class AuthenticateUserService{

    constructor(repository)
    {
        this._rep = repository;
    }

    async authenticate(user)
    {
        if(user.username === "admin" && user.password === "test")
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