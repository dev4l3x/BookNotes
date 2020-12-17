const NotesController = require('./notesController');
const {app} = require('./../../index');
const express = require('express');
/* eslint-disable */
const router = express.Router();
const {authmiddle} = require('../../common/middlewares/authMiddleware');


router.use('/:bookId/notes', authmiddle);
router.use('/notes/:noteId', authmiddle);
app.use('/', router);

app.post('/:bookId/notes', NotesController.notePost);

app.put('/notes/:noteId', NotesController.noteEditPut);

app.delete('/notes/:noteId', NotesController.noteDelete);
