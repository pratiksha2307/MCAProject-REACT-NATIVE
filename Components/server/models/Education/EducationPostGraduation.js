const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eduposid: {
        type: String,
        unique: true,
        required: true
    },
    eduposname: {
        type: String,
        required: true
    },
    eduposdescription: {
        type: String,
        required: true
    },
    eduposlink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationPostGraduation', Schema);