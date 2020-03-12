const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    password: String,
    email: String,
    role: String
});

module.exports = mongoose.model('user', usersSchema);