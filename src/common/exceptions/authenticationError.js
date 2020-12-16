const HttpError = require('./httpError');

module.exports = class AuthenticationError extends HttpError {
  constructor(message) {
    super(401, message);
  }
};
