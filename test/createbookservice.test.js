const assert = require('assert');
const CreateBookService = require('../src/books/application/createBookService') 
describe('CreateBookService', () => {
    it('should create a book', () => {
        let created = false;
        let mockRepository = {};
        mockRepository.prototype = {}
        mockRepository.prototype.create = function()
        {
            created = true;
        }

        let bookService = new CreateBookService(mockRepository.prototype);
        bookService.create();

        assert.strictEqual(created, true);
    });
});