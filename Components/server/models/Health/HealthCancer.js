const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healcanid: {
        type: String,
        unique: true,
        required: true
    },
    healcanname: {
        type: String,
        required: true
    },
    healcandescription: {
        type: String,
        required: true
    },
    healcanlink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthCancer', Schema);