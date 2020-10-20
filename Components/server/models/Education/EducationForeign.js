const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eduforid: {
        type: String,
        unique: true,
        required: true
    },
    eduforname: {
        type: String,
        required: true
    },
    edufordescription: {
        type: String,
        required: true
    },
    eduforlink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationForeign', Schema);