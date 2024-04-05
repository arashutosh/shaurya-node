const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const chat= mongoose.model('chat',chatSchema);

module.exports = chat;

