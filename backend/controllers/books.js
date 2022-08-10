const router = require('express').Router()

const Book = require('../models/book')
// const User = require('../models/user')

router.get('/', async (req, res) => {
    const books = await Book.find({}).populate('user')
    res.json(books)
})

module.exports = router
