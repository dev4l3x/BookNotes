const express = require('express'); 
const Book = require('./books/domain/book');
require('dotenv').config();
const app = express();
module.exports.app = app;
const port = 3000
const Repository = require('./common/persistence/Repository');
const DatabaseConfiguration = require('./configuration/DatabaseConfiguration');
const commandBusConfiguration = require('./configuration/commandBusConfiguration');

commandBusConfiguration();

app.use(express.json());


require('./books/infraestructure/bookRoutes');
require('./auth/infraestructure/authRoutes');


app.use(function(error, req, res, next){
    return res.status(500).send("Internal server error");
});



app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});