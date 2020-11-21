
module.exports = class CreateNoteCommand {
    constructor(title, body, book, userAuthenticated)
    {
        this.title = title;
        this.body = body;
        this.book = book;
        this.userAuthenticated = userAuthenticated;
    }
}