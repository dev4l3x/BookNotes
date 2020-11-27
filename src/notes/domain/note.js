const BadArgError = require('../../common/exceptions/badArgumentError');

module.exports = class Note{

    _title;
    _body;

    constructor(title, body, id)
    {
        this.title = title;
        this.body = body;
        this.id = id;
    }

    set title (value){
        if(value === undefined || value === null)
        {
            throw new BadArgError(`Title cannot be null or undefined for property`)
        }
        this._title = value;
    }

    get title(){
        return this._title;
    }

    set body(value){
        if(value === undefined || value === null)
        {
            throw new BadArgError(`Title cannot be null or undefined for property`)
        }
        this._body = value;
    }

    get body(){
        return this._body;
    }
}