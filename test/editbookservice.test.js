const assert = require('assert');
const EditBookService = require('../src/books/application/editBookService');
// const AuthenticationError = require('../src/common/exceptions/authenticationError');
// const badArgumentError = require('../src/common/exceptions/badArgumentError');

describe('EditBookService', async () => {
    describe('when book exits and user is propietary', async ()=>{
        it('should edit the book', async () => {
            let updated = false;
            let mockRepository = {};
            mockRepository = {}
            mockRepository.isBookOfUser = function(book, user)
            {
                return true;
            }

            mockRepository.get = function(bookId){
                return {title:'test', author:'test'};
            }

            mockRepository.editBook = function(book){
                updated = true;
            }
            let userAuthenticated = {};
            let bookService = new EditBookService(mockRepository, userAuthenticated);
            let book = {
                id: 'testid',
                title: 'testtitle',
                author: 'testauthor'
            }
            await bookService.updateBook(book);
    
            assert.strictEqual(updated, true);
        });
    });

    describe('when book does not exits', ()=>{
        it('should throw BarArgumentError', () => {
            let updated = false;
            let mockRepository = {};
            mockRepository.prototype = {}
            mockRepository.prototype.get = function(bookId){
                return null;
            }
            mockRepository.prototype.idBookOfUser = function(book, user)
            {
                return true;
            }

            mockRepository.prototype.editBook = function(book){
                updated = true;
            }
            let userAuthenticated = {};
            let bookService = new EditBookService(mockRepository.prototype, userAuthenticated);
            let book = {
                id: 'testid',
                title: 'testtitle',
                author: 'testauthor'
            }
            assert.rejects(async function(){
                bookService.updateBook(book);
            }, Error);
            assert.strictEqual(updated, false);
        });
    });

    describe('when book exits but user is not propietary', ()=>{
        it('should throw AuthenticationError', () => {
            let updated = false;
            let mockRepository = {};
            mockRepository.prototype = {}
            mockRepository.prototype.idBookOfUser = function(book, user)
            {
                return false;
            }
            mockRepository.prototype.get = function(bookId){
                return {};
            }
            mockRepository.prototype.editBook = function(book){
                updated = true;
            }
            let userAuthenticated = {};
            let bookService = new EditBookService(mockRepository.prototype, userAuthenticated);
            let book = {
                id: 'testid',
                title: 'testtitle',
                author: 'testauthor'
            }
            
            assert.rejects(async function(){
                bookService.updateBook(book);
            }, Error);
            assert.strictEqual(updated, false);
        });
    });
});
