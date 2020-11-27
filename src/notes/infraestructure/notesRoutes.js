const NotesController = require('./notesController');
const { app } = require('./../../index');
const express = require('express')
const router = express.Router();
const {authmiddle} = require('../../common/middlewares/authMiddleware');


router.use('/:bookId/notes', authmiddle);
router.use('/notes/:noteId', authmiddle);
app.use('/', router);

app.post('/:bookId/notes', NotesController.note_post);

app.put('/notes/:noteId', NotesController.note_edit_put);