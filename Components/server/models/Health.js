const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healthid: {
        type: String,
        unique: true,
        required: true
    },
    subhealth: {
        type: String,
        required: true
    },
    subheaimage: {
        type: String,
        required: true
    }
})

mongoose.model('Health', Schema);