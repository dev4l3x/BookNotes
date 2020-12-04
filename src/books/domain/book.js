
const BadArgumentError = require('../../common/exceptions/badArgumentError');

module.exports = class Book{

    _title;
    _author;
    _notes;

    constructor({ title, author, notes = [] })
    {
        this.title = title;
        this.author = author;
        this.notes = notes;
    }

    get title(){
        return this._title;
    }

    set title(value){
        if(!value)
            throw new BadArgumentError('Title cannot be empty');
        this._title = value;
    }

    get author(){
        return this._author;
    }

    set author(value){
        if(!value)
            throw new BadArgumentError('Author cannot be empty');
        this._author = value;
    }

}