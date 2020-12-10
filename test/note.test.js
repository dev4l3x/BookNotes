const assert = require('assert');
const Note = require('../src/notes/domain/note'); 
const BadArgumentError = require('../src/common/exceptions/badArgumentError');
describe('Note Test', () => {
    describe('when create a note with empty title', ()=>{
        it('should throw BadArgumentException', () => {
            let capturedException;
            try{
                new Note({body: "test"});
            }
            catch(e){
                capturedException = e;
            }
            assert.ok(capturedException instanceof BadArgumentError);
        });
    });

    describe('when create a note with empty body', ()=>{
        it('should throw BadArgumentException', () => {
            let capturedException;
            try{
                new Note({title: "test"});
            }
            catch(e){
                capturedException = e;
            }
            assert.ok(capturedException instanceof BadArgumentError);
        });
    });

    describe('when create a note with title and body', ()=>{
        it('should set respective properties', () => {
            let note = new Note({title: "test", body: "test"});
            assert.strictEqual(note.title, "test");
            assert.strictEqual(note.body, "test");
        });
    });
});
