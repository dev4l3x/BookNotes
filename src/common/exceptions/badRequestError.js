const HttpError = require('./httpError');

module.exports = class BadRequestError extends HttpError {
  constructor(message) {
    super(400, message);
    BadRequestError.error_code = 400;
  }

  toString() {
    return `{ error_code: ${BadRequestError.error_code}, message: ${message} }`;
  }
};
