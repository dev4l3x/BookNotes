const BookController = require('./bookController');
const { app } = require('./../../index');

app.post('/books', BookController.book_create_post);