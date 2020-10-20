const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healchiid: {
        type: String,
        unique: true,
        required: true
    },
    healchiname: {
        type: String,
        required: true
    },
    healchidescription: {
        type: String,
        required: true
    },
    healchilink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthChild', Schema);