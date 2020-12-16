
const jwt = require('jsonwebtoken');
const Rep = require('../persistence/Repository');
const {UserModel} = require('../../configuration/DatabaseConfiguration');

module.exports.authmiddle = async function(req, res, next) {
  const token = req.headers['authorization'];
  const rep = new Rep(UserModel);

  if (token) {
    jwt.verify(token, process.env.APP_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({message: 'Invalid token'});
      } else {
        req.decoded = decoded;
        req.user = await rep.get(decoded.userId);
        next();
      }
    });
  } else {
    return res.status(401).json({error_code: 401, message: 'Invalid token'});
  }
};
