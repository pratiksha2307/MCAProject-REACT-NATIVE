const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrcroid: {
        type: String,
        unique: true,
        required: true
    },
    agrcroname: {
        type: String,
        required: true
    },
    agrcrodescription: {
        type: String,
        required: true
    },
    agrcrolink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureCrops', Schema);