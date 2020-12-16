
const QueryBus = require('../../common/queryBus');
const CommandBus = require('../../common/commandBus');
const GetTokenQuery = require('./cqrs/queries/getTokenQuery');
const RegisterCommand = require('./cqrs/commands/registerCommand');

module.exports = class AuthController {
  static async authPost(req, res, next) {
    if (req.body.user && req.body.password) {
      const query = new GetTokenQuery(req.body.user, req.body.password);
      const response = await QueryBus.instance.dispatch(query);
      if (response.authorized) {
        return res.json({access_token: response.token});
      }
    }

    return res.status(401).send('Unathorized');
  }

  static async registerPost(req, res, next) {
    try {
      const command = new RegisterCommand();
      Object.assign(command, req.body);
      const success = await CommandBus.instance.dispatch(command);

      res.status(success ? 201 : 500)
          .send(success ? 'Created' : 'An error has ocurred');
    } catch (error) {
      next(error);
    }
  }
};
