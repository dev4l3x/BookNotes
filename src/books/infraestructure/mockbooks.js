Book = require('../domain/book');

module.exports = class BooksRespository {

    constructor(){

    }

    getBooks (){
        return [
            new Book({ title: "prueba", author: "prueba", notes: [] } )
        ];
    }
}