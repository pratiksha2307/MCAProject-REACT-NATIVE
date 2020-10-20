const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrmarid: {
        type: String,
        unique: true,
        required: true
    },
    agrmarname: {
        type: String,
        required: true
    },
    agrmardescription: {
        type: String,
        required: true
    },
    agrmarlink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureMarketing', Schema);