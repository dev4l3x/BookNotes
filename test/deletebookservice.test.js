const assert = require('assert');
const DeleteBookService = require('../src/books/application/deleteBookService');
// const BadArgumentError = require('../src/common/exceptions/badArgumentError');
// const BadArgumentError = require('../src/common/exceptions/badArgumentError');
require('dotenv').config();


describe('Delete Book Service', async () => {
  describe('when delete book that exits and user is authorized', async () => {
    it(
      'should delete the book and the notes contained in that book', 
    async () => {
            let bookDeleted = false;
            let notesDeleted = false;

            let mockNoteRepository = {};
            let mockBookRepository = {};

            mockBookRepository.isBookOfUser = function(bookId, user){
                return true;
            };

            mockBookRepository.get = function(id){
                return {
                    notes:[],
                    title: 'test title',
                    author: 'test author',
                }
            };

            mockBookRepository.delete = function(book){
                bookDeleted = true;
            };

            mockNoteRepository.deleteNotesForBook = function(book){
                notesDeleted = true;
            };

            let deleteService = new DeleteBookService(mockBookRepository, mockNoteRepository);
            await deleteService.deleteBook('testid', {});

            assert.strictEqual(bookDeleted, true);
            assert.strictEqual(notesDeleted, true);
        });
    });


    describe('when deleting book that does not exits', async () => {
        it('should throw BadArgumentError', async () => {
            let bookDeleted = false;
            let notesDeleted = false;

            let mockNoteRepository = {};
            let mockBookRepository = {};

            mockBookRepository.get = function(id){
                return null;
            };

            mockBookRepository.delete = function(book){
                bookDeleted = true;
            };

            mockBookRepository.delete = function(book){
                bookDeleted = true;
            };

            mockNoteRepository.deleteNotesForBook = function(book){
                notesDeleted = true;
            };

            let deleteService = new DeleteBookService(mockBookRepository, mockNoteRepository);
            
            assert.rejects(async function(){
                await deleteService.deleteBook('testid', {});
            }, Error);
            assert.strictEqual(bookDeleted, false);
            assert.strictEqual(notesDeleted, false);
        });
    });

    describe('when deleting book that exits but user is not propietary', async () => {
        it('should throw AuthenticationError and not delete the book and the notes', async () => {
            let bookDeleted = false;
            let notesDeleted = false;

            let mockNoteRepository = {};
            let mockBookRepository = {};

            mockBookRepository.isBookOfUser = function(bookId, user){
                return false;
            };

            mockBookRepository.get = function(id){
                return {
                    notes:[],
                    title: 'test title',
                    author: 'test author',
                }
            };

            mockBookRepository.delete = function(book){
                bookDeleted = true;
            };

            mockNoteRepository.deleteNotesForBook = function(book){
                notesDeleted = true;
            };

            let deleteService = new DeleteBookService(mockBookRepository, mockNoteRepository);
            
            assert.rejects(async function(){
                await deleteService.deleteBook('testid', {});
            }, Error);
            assert.strictEqual(bookDeleted, false);
            assert.strictEqual(notesDeleted, false);
        });
    });

});
