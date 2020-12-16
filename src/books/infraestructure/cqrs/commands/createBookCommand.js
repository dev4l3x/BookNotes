
module.exports = class CreateBookCommand {
  constructor(title, author, userCreator) {
    this.title = title;
    this.author = author;
    this.userCreator = userCreator;
  }
};
