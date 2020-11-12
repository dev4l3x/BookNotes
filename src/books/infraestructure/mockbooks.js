Book = require('../domain/book');

module.exports = class BooksRespository {

    constructor(){

    }

    getBooks (){
        return [
            new Book("prueba", "prueba", [])
        ];
    }
}