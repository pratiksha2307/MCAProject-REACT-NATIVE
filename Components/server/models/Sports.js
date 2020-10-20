const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    sportsid: {
        type: String,
        unique: true,
        required: true
    },
    subsports: {
        type: String,
        required: true
    },
    subspoimage: {
        type: String,
        required: true
    }
})

mongoose.model('Sports', Schema);