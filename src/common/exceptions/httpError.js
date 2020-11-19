


module.exports = class HttpError extends Error{

    constructor(errorCode, message){
        super(message);
        this.error_code = errorCode;
    }

    toJson(){
        return { error_code: this.error_code, message: this.message };
    }
}