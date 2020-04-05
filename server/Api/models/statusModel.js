const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String
});

module.exports = mongoose.model('status', statusSchema);