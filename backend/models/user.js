const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('User', schema)
