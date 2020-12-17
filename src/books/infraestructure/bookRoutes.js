const BookController = require('./bookController');
const {app} = require('./../../index');
const express = require('express');
/* eslint-disable */
const router = express.Router();
const {authmiddle} = require('../../common/middlewares/authMiddleware');


router.use('/books', authmiddle);
app.use('/', router);

app.post('/books', BookController.bookCreatePost);
app.get('/books', BookController.bookGet);
