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

module.exports.BookModel = mongoose.model('Book', bookSchema);