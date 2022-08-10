const express = require('express')
const cors = require('cors')

const app = express()

const booksRouter = require('./controllers/books')
const usersRouter = require('./controllers/users')

// Connecting to MongoDB Server
const mongoose = require('mongoose')
const MONGODB_URI =
    'mongodb+srv://triluu:180302@learnwebdev.4lppr.mongodb.net/BookApp?retryWrites=true&w=majority'

console.log('connecting to MongoDB')
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/books', booksRouter)
app.use('/api/users', usersRouter)

module.exports = app
