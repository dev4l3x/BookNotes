const express = require('express'); 
const Book = require('./books/domain/book');
require('dotenv').config();
const app = express();
module.exports.app = app;
const port = 3000
const Repository = require('./common/persistence/Repository');

const httpFactory = require('./common/exceptions/httpErrorFactory');
const DatabaseConfiguration = require('./configuration/DatabaseConfiguration');
const commandBusConfiguration = require('./configuration/commandBusConfiguration');
const configureQueryBus = require('./configuration/queryBusConfiguration');
const BadArgumentError = require('./common/exceptions/badArgumentError');


commandBusConfiguration();
configureQueryBus();

app.use(express.json());


require('./books/infraestructure/bookRoutes');
require('./auth/infraestructure/authRoutes');


app.use(function(error, req, res, next){
    if(error){
        console.error(error);
        next(error);
    }
});

app.use(function(error, req, res, next){
    if(error){
        let httpError = httpFactory.createHttpErrorFrom(error)
        console.error(httpError.message);
        return res.status(httpError.error_code).json(httpError.toJson());
    }
});



app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});