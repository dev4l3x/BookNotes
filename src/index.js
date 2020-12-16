const express = require('express');
require('dotenv').config();
const app = express();
module.exports.app = app;
const port = 3000;

const httpFactory = require('./common/exceptions/httpErrorFactory');
const cmdBusConfiguration = require('./configuration/commandBusConfiguration');
const configureQueryBus = require('./configuration/queryBusConfiguration');

cmdBusConfiguration();
configureQueryBus();

app.use(express.json());


require('./books/infraestructure/bookRoutes');
require('./auth/infraestructure/authRoutes');
require('./notes/infraestructure/notesRoutes');


app.use(function(error, req, res, next) {
  if (error) {
    console.error(error);
    next(error);
  }
});

app.use(function(error, req, res, next) {
  if (error) {
    const httpError = httpFactory.createHttpErrorFrom(error);
    console.error(httpError.message);
    return res.status(httpError.error_code).json(httpError.toJson());
  }
});


app.listen(port, () => {
  console.log(`BookNOtes app listening at port ${port}`);
});
