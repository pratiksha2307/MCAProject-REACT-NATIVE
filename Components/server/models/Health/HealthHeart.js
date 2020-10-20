const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    healheaid: {
        type: String,
        unique: true,
        required: true
    },
    healheaname: {
        type: String,
        required: true
    },
    healheadescription: {
        type: String,
        required: true
    },
    healhealink: {
        type: String,
        required: true
    }
})

mongoose.model('HealthHeart', Schema);