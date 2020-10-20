const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    spoboxid: {
        type: String,
        unique: true,
        required: true
    },
    spoboxname: {
        type: String,
        required: true
    },
    spoboxdescription: {
        type: String,
        required: true
    },
    spoboxlink: {
        type: String,
        required: true
    }
})

mongoose.model('SportsBoxing', Schema);