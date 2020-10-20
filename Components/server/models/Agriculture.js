const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    agricultureid: {
        type: String,
        unique: true,
        required: true
    },
    subagriculture: {
        type: String,
        required: true
    },
    subagrimage: {
        type: String,
        required: true
    }
})

mongoose.model('Agriculture', Schema);