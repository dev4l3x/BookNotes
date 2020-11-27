
module.exports = class EditNoteCommand {
    constructor(noteId, title, body, userAuthenticated)
    {
        this.noteId = noteId;
        this.title = title;
        this.body = body;
        this.userAuthenticated = userAuthenticated;
    }
}