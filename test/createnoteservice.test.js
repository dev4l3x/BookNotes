const assert = require('assert');
const CreateNoteService = require('../src/notes/application/createNoteService');
const BadArgumentError = require('./../src/common/exceptions/badArgumentError');
const crypto = require('crypto');
require('dotenv').config();


describe('Create Note Service', async () => {
    describe('when create new note with a bookid', async () => {
        it('should create the note received in storage and add the note to the book', async () => {
            let created = false;
            let bookUpdated = false;

            let mockRepository = {};
            let mockBookRepository = {};
            mockRepository.createNoteForBook = function(note, bookid){
                created = true;
                return { _id: "" }
            };

            let book = {
                notes: []
            }

            mockBookRepository.get = function(id){
                return book;
            }
            mockBookRepository.update = function(entity){
                bookUpdated = true;
            }
    
            let authService = new CreateNoteService(mockRepository, mockBookRepository);
            await authService.createNoteForBook({}, 'bookidfake');

            assert.strictEqual(created, true);
            assert.strictEqual(bookUpdated, true);
            assert.ok(book.notes.length === 1);
        });
    });


    describe('when create new note without a bookid', async () => {
        it('should throw BadArgumentError', async () => {
            let created = false;

            let mockRepository = {};
            mockRepository.createNoteForBook = function(note, bookid){
                created = true;
            };
    
            let noteService = new CreateNoteService(mockRepository);

            assert.rejects(async function() {
                await noteService.createNoteForBook({}, null);
            }, Error);
            assert.notStrictEqual(created, true)
        });
    });

});
