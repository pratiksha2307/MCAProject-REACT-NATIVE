const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    edukidid: {
        type: String,
        unique: true,
        required: true
    },
    edukidname: {
        type: String,
        required: true
    },
    edukiddescription: {
        type: String,
        required: true
    },
    edukidlink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationKid', Schema);