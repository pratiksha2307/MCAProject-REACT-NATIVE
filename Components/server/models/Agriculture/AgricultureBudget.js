const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agrbudid: {
        type: String,
        unique: true,
        required: true
    },
    agrbudname: {
        type: String,
        required: true
    },
    agrbuddescription: {
        type: String,
        required: true
    },
    agrbudlink: {
        type: String,
        required: true
    }
})

mongoose.model('AgricultureBudget', Schema);