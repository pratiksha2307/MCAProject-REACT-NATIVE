const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    spocriid: {
        type: String,
        unique: true,
        required: true
    },
    spocriname: {
        type: String,
        required: true
    },
    spocridescription: {
        type: String,
        required: true
    },
    spocrilink: {
        type: String,
        required: true
    }
})

mongoose.model('SportsCricket', Schema);