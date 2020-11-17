const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://asiglesias:X63buEYfd7ccXCRXRXta@booksnotes.ssmch.mongodb.net/BooksNotes?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: String
});

let UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    name: String,
    lastname: String,
    email: String
});

module.exports.UserModel = mongoose.model('User', UserSchema);
module.exports.BookModel = mongoose.model('Book', bookSchema);