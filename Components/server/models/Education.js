const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    educationid: {
        type: String,
        unique: true,
        required: true
    },
    subeducation: {
        type: String,
        required: true
    },
    subeduimage: {
        type: String,
        required: true
    }
})

mongoose.model('Education', Schema);