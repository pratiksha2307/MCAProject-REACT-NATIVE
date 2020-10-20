const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrcenid: {
        type: String,
        unique: true,
        required: true
    },
    agrcenname: {
        type: String,
        required: true
    },
    agrcendescription: {
        type: String,
        required: true
    },
    agrcenlink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureCensus', Schema);