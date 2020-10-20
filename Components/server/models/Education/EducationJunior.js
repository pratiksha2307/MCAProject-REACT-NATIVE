const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    edujunid: {
        type: String,
        unique: true,
        required: true
    },
    edujunname: {
        type: String,
        required: true
    },
    edujundescription: {
        type: String,
        required: true
    },
    edujunlink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationJunior', Schema);