const BookController = require('./bookController');
const { app } = require('./../../index');
const express = require('express')
const router = express.Router();
const {authmiddle} = require('../../common/middlewares/authMiddleware');


router.use('/books', authmiddle);
app.use('/', router);

app.post('/books', BookController.book_create_post);
app.get('/books', BookController.book_get);
