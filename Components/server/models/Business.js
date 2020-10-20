const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    businessid: {
        type: String,
        unique: true,
        required: true
    },
    subbusiness: {
        type: String,
        required: true
    },
    subbusimage: {
        type: String,
        required: true
    }
})

mongoose.model('Business', Schema);