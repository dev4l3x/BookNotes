const AuthController = require('./authController');
const { app } = require('./../../index');

app.post('/auth', AuthController.auth_post);
app.post('/auth/register', AuthController.register_post);