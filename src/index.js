const express = require('express'); 
const Book = require('./books/domain/book');
const app = express();
module.exports.app = app;
const port = 3000
const Repository = require('./common/persistence/Repository');
const DatabaseConfiguration = require('./configuration/DatabaseConfiguration');
const mongoose = require('mongoose');


// BK = mongoose.model('Book', DatabaseConfiguration.bookSchema);


// var book = new BK({title: "pruebadocumento", body: "prueba mongoose"});
// book.save();

app.use(express.json());

const bookRoutes = require('./books/infraestructure/bookRoutes');


app.get('/', async function(req, res){
    let rep = new Repository(BK);
    books = await rep.getAll();
    res.send(books);
});



app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});