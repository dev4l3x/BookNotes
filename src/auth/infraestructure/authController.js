
const CommandBus = require('../../common/commandBus');
const jwt = require('jsonwebtoken');

module.exports = class AuthController {

    static async auth_post(req, res, next) {
        if(req.body.user === 'admin' && req.body.password === 'test')
        {
            const token = jwt.sign({role: 'user'}, process.env.APP_SECRET, { expiresIn: 1400 });
            return res.json({access_token: token});
        }

        return res.status(401).send("Unathorized");
    }
}