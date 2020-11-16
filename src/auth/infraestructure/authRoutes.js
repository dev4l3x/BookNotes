const AuthController = require('./authController');
const { app } = require('./../../index');

app.post('/auth', AuthController.auth_post);