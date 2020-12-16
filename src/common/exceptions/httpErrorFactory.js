
const HttpError = require('./httpError');
const BadArgError = require('./badArgumentError');
const NotFoundError = require('./notFoundError');

module.exports = class HttpErrorFactory {
  static createHttpErrorFrom(error) {
    let httpError = new HttpError(500, 'Internal server error');

    if (error instanceof BadArgError) {
      httpError = new HttpError(400, error.message);
    } else if (error instanceof NotFoundError) {
      httpError = new HttpError(404, error.message);
    }

    return httpError;
  }
};
