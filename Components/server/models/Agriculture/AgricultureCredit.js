const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrcreid: {
        type: String,
        unique: true,
        required: true
    },
    agrcrename: {
        type: String,
        required: true
    },
    agrcredescription: {
        type: String,
        required: true
    },
    agrcrelink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureCredit', Schema);