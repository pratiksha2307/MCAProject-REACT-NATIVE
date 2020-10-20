const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    spobicid: {
        type: String,
        unique: true,
        required: true
    },
    spobicname: {
        type: String,
        required: true
    },
    spobicdescription: {
        type: String,
        required: true
    },
    spobiclink: {
        type: String,
        required: true
    }
})

mongoose.model('SportsBicycle', Schema);