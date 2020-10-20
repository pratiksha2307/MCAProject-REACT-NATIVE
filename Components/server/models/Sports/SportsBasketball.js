const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    spobasid: {
        type: String,
        unique: true,
        required: true
    },
    spobasname: {
        type: String,
        required: true
    },
    spobasdescription: {
        type: String,
        required: true
    },
    spobaslink: {
        type: String,
        required: true
    }
})

mongoose.model('SportsBasketball', Schema);