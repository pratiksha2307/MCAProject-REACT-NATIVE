const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    edujobid: {
        type: String,
        unique: true,
        required: true
    },
    edujobname: {
        type: String,
        required: true
    },
    edujobdescription: {
        type: String,
        required: true
    },
    edujoblink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationJob', Schema);