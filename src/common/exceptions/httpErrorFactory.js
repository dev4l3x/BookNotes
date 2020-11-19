
const HttpError = require('./httpError');
const BadArgError = require('./badArgumentError');

module.exports = class HttpErrorFactory {
    static createHttpErrorFrom(error)
    {
        let httpError = new HttpError(500, "Internal server error");

        if(error instanceof BadArgError)
        {
            httpError = new HttpError(400, error.message);
        }

        return httpError;
    }
}