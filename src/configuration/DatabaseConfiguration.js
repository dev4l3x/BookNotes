const mongoose = require('mongoose')

mongoose.connect("", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: String
});

let UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    name: String,
    lastname: String,
    email: String
});

module.exports.UserModel = mongoose.model('User', UserSchema);
module.exports.BookModel = mongoose.model('Book', bookSchema);
