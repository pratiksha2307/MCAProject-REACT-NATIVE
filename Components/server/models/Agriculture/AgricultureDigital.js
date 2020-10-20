const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrdigid: {
        type: String,
        unique: true,
        required: true
    },
    agrdigname: {
        type: String,
        required: true
    },
    agrdigdescription: {
        type: String,
        required: true
    },
    agrdiglink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureDigital', Schema);