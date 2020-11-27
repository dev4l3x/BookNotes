const assert = require('assert');
const CreateNoteService = require('../src/notes/application/createNoteService');
const BadArgumentError = require('./../src/common/exceptions/badArgumentError');
const crypto = require('crypto');
require('dotenv').config();


describe('Create Note Service', async () => {
    describe('when create new note with a bookid', async () => {
        it('should create the note received in storage', async () => {
            let created = false;

            let mockRepository = {};
            mockRepository.createNoteForBook = function(note, bookid){
                created = true;
            };
    
            let authService = new CreateNoteService(mockRepository);
            await authService.createNoteForBook({}, 'bookidfake');

            assert.strictEqual(created, true);
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
