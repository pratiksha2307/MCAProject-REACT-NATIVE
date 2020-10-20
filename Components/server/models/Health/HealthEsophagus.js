const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healesoid: {
        type: String,
        unique: true,
        required: true
    },
    healesoname: {
        type: String,
        required: true
    },
    healesodescription: {
        type: String,
        required: true
    },
    healesolink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthEsophagus', Schema);