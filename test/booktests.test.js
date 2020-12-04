const assert = require('assert');
const Book = require('../src/books/domain/book'); 
const BadArgumentError = require('../src/common/exceptions/badArgumentError');
describe('Book Test', () => {
    describe('when create a book with empty title', ()=>{
        it('should throw BadArgumentException', () => {
            let capturedException;
            try{
                new Book({author: "test"});
            }
            catch(e){
                capturedException = e;
            }
            assert.ok(capturedException instanceof BadArgumentError);
        });
    });

    describe('when create a book with empty author', ()=>{
        it('should throw BadArgumentException', () => {
            let capturedException;
            try{
                new Book({title: "test"});
            }
            catch(e){
                capturedException = e;
            }
            assert.ok(capturedException instanceof BadArgumentError);
        });
    });
});
