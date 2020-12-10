
module.exports = class DeleteNoteCommand {
    constructor(noteId, userAuthenticated)
    {
        this.noteId = noteId;
        this.userAuthenticated = userAuthenticated;
    }
}