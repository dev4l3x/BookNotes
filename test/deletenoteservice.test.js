const assert = require('assert');
const NotFoundError = require('./../src/common/exceptions/notFoundError');
const AuthenticationError = require('./../src/common/exceptions/authenticationError');
const crypto = require('crypto');
const DeleteNoteService = require('../src/notes/application/deleteNoteService');
require('dotenv').config();


describe('Delete Note Service', async () => {
    describe('when delete an existing note with propietary user', async () => {
        it('should delete the note from the book and the note itself', async () => {
            let deletedNote = false;
            let updatedBook = false;
            const book = {
                notes: ['test']
            }
            let mockNoteRepository = {};
            let mockBookRepository = {};
            mockNoteRepository.delete = function(note){
                deletedNote = true;
            };

            mockBookRepository.getBookContainingNote = function(note){
                return book;
            }

            mockBookRepository.isBookOfUser = function(bookId, user){
                return true;
            }

            mockBookRepository.update = function(entity){
                updatedBook = true;
            }
    
            let deleteNoteService = new DeleteNoteService(mockNoteRepository, mockBookRepository, {});
            await deleteNoteService.deleteNote({ id: 'test' });

            assert.strictEqual(deletedNote, true);
            assert.strictEqual(updatedBook, true);
            assert.ok(book.notes.length === 0);
        });
    });


    describe('when delete a non existing note with propietary user', async () => {
        it('should throw NotFoundError', async () => {

            let cathedError;

            try{
                let deleteNoteService = new DeleteNoteService({}, {}, {});
                await deleteNoteService.deleteNote(null);
            }
            catch(error){
                catchedError = error;
            }

            assert.ok(catchedError instanceof NotFoundError);
        });
    });

    describe('when delete an existing note with unathorized user', async () => {
        it('should throw AuthenticationError', async () => {

            let deletedNote = false;
            let updatedBook = false;
            const book = {
                notes: [{ id: 'test' }]
            }
            let mockNoteRepository = {};
            let mockBookRepository = {};
            mockNoteRepository.delete = function(note){
                deletedNote = true;
            };

            mockBookRepository.getBookContainingNote = function(note){
                return book;
            }

            mockBookRepository.isBookOfUser = function(bookId, user){
                return false;
            }

            mockBookRepository.update = function(entity){
                updatedBook = true;
            }
            
            let catchedError;

            try{
                let deleteNoteService = new DeleteNoteService(mockNoteRepository, mockBookRepository, {});
                await deleteNoteService.deleteNote({ id: 'test' });
            }
            catch(error){
                catchedError = error;
            }
            assert.ok(catchedError instanceof Error);
        });
    });

});
