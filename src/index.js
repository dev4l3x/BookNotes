const express = require('express'); 
const Book = require('./books/domain/book');
require('dotenv').config();
const app = express();
module.exports.app = app;
const port = 3000
const Repository = require('./common/persistence/Repository');
const DatabaseConfiguration = require('./configuration/DatabaseConfiguration');
const commandBusConfiguration = require('./configuration/commandBusConfiguration');
const configureQueryBus = require('./configuration/queryBusConfiguration');

commandBusConfiguration();
configureQueryBus();

app.use(express.json());


require('./books/infraestructure/bookRoutes');
require('./auth/infraestructure/authRoutes');


app.use(function(error, req, res, next){
    if(error)
        return res.status(500).send(`Internal server error: ${error}`);
});



app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});