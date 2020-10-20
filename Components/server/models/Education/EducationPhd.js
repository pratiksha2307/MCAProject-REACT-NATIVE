const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eduphdid: {
        type: String,
        unique: true,
        required: true
    },
    eduphdname: {
        type: String,
        required: true
    },
    eduphddescription: {
        type: String,
        required: true
    },
    eduphdlink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationPhd', Schema);