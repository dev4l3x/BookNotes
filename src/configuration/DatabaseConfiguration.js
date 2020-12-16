const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
  }],
});

const noteSchema = new Schema({
  title: String,
  body: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
});

const UserSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: String,
  name: String,
  lastname: String,
  email: String,
});

module.exports.UserModel = mongoose.model('User', UserSchema);
module.exports.BookModel = mongoose.model('Book', bookSchema);
module.exports.NoteModel = mongoose.model('Note', noteSchema);
