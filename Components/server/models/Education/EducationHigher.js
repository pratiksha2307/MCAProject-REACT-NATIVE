const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eduhigid: {
        type: String,
        unique: true,
        required: true
    },
    eduhigname: {
        type: String,
        required: true
    },
    eduhigdescription: {
        type: String,
        required: true
    },
    eduhiglink: {
        type: String,
        required: true
    }
})

mongoose.model('EducationHigher', Schema);