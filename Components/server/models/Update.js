const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    userfullname: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    userphone: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }

})

mongoose.model('Update', Schema);