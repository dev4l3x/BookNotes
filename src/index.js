const express = require('express'); 
const Book = require('./books/domain/book');
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Repository = require('./common/persistence/Repository');

var MongoClient = require('mongodb').MongoClient;
a = require('./books/infraestructure/mockbooks');


mongoose.connect("mongodb+srv://asiglesias:X63buEYfd7ccXCRXRXta@booksnotes.ssmch.mongodb.net/BooksNotes?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    body: String
});

BK = mongoose.model('Book', BookSchema);


// var book = new BK({title: "pruebadocumento", body: "prueba mongoose"});
// book.save();

app.use(express.json());

app.get('/', async function(req, res){
    let rep = new Repository(BK);
    books = await rep.getAll();
    res.send(books);
});

app.post('/', function(req, res, next){
    console.log(req.body);
    book = new Book;
    Object.assign(book, req.body);
    console.log(book.title);
    res.send("Created");
});

app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});