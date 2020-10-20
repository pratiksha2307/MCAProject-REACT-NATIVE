const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    edugraid: {
        type: String,
        unique: true,
        required: true
    },
    edugraname: {
        type: String,
        required: true
    },
    edugradescription: {
        type: String,
        required: true
    },
    edugralink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationGraduation', Schema);