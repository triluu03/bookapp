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
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
})

schema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.passwordHash
    },
})

module.exports = mongoose.model('User', schema)
