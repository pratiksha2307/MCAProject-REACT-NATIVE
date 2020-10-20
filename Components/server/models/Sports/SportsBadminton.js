const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    spobadid: {
        type: String,
        unique: true,
        required: true
    },
    spobadname: {
        type: String,
        required: true
    },
    spobaddescription: {
        type: String,
        required: true
    },
    spobadlink: {
        type: String,
        required: true
    }
})

mongoose.model('SportsBadminton', Schema);