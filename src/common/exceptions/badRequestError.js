const HttpError = require('./httpError');

module.exports = class BadRequestError extends HttpError {

    static error_code = 400;

    constructor(message){
        super(400, message);
    }

    toString(){
        return `{ error_code: ${BadRequestError.error_code}, message: ${message} }`
    }
}