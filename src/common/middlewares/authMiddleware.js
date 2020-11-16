
const jwt = require('jsonwebtoken');

module.exports.authmiddle = function(req, res, next)
{
    const token = req.headers['authorization'];
    if(token)
    {
        jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
            if(err)
            {
                return res.status(401).json({message: 'Invalid token'});
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.status(401).json({message: 'Invalid token'});
    }

}