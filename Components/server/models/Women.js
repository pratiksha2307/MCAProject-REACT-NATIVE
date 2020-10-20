const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    womenid: {
        type: String,
        unique: true,
        required: true
    },
    subwomen: {
        type: String,
        required: true
    },
    subwomimage: {
        type: String,
        required: true
    }
})

mongoose.model('Women', Schema);