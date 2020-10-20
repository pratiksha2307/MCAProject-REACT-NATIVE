const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    womeduid: {
        type: String,
        unique: true,
        required: true
    },
    womeduname: {
        type: String,
        required: true
    },
    womedudescription: {
        type: String,
        required: true
    },
    womedulink: {
        type: String,
        required: true
    }
})

mongoose.model('WomenEducation', Schema);