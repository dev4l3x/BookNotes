const AuthController = require('./authController');
const {app} = require('./../../index');

app.post('/auth', AuthController.authPost);
app.post('/auth/register', AuthController.registerPost);
