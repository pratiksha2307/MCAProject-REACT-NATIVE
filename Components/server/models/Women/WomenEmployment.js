const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    womempid: {
        type: String,
        unique: true,
        required: true
    },
    womempname: {
        type: String,
        required: true
    },
    womempdescription: {
        type: String,
        required: true
    },
    womemplink: {
        type: String,
        required: true
    }
})

mongoose.model('WomenEmployment', Schema);