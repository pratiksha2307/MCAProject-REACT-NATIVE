const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healbraid: {
        type: String,
        unique: true,
        required: true
    },
    healbraname: {
        type: String,
        required: true
    },
    healbradescription: {
        type: String,
        required: true
    },
    healbralink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthBrain', Schema);