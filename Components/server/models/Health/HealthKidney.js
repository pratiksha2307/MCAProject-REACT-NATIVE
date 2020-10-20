const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healkidid: {
        type: String,
        unique: true,
        required: true
    },
    healkidname: {
        type: String,
        required: true
    },
    healkiddescription: {
        type: String,
        required: true
    },
    healkidlink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthKidney', Schema);