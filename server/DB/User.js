const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    }
});

module.exports = User = mongoose.model('user', user);