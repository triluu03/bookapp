const router = require('express').Router()

const Book = require('../models/book')
const User = require('../models/user')

const jwt = require('jsonwebtoken')
require('dotenv').config()

router.get('/', async (req, res) => {
    const books = await Book.find({}).populate('addedBy', {
        username: 1,
        name: 1,
    })
    res.json(books)
})

router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.json(book)
})

// Getting Authorized token
const getTokenFrom = (req) => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

router.post('/', async (req, res) => {
    const body = req.body

    const token = getTokenFrom(req)
    // eslint-disable-next-line no-undef
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({ error: 'invalid authorization' })
    }

    const user = await User.findById(decodedToken.id)

    const book = new Book({
        name: body.name,
        published: body.published,
        author: body.author,
        likes: 0,
        dislikes: 0,
        comments: [],
        addedBy: user._id,
    })

    const savedBook = await book.save()
    user.books = user.books.concat(savedBook._id)
    await user.save()

    res.status(201).json(savedBook)
})

router.put('/:id', async (req, res) => {
    const body = req.body
    const id = req.params.id

    const book = {
        name: body.name,
        published: body.published,
        author: body.author,
        likes: body.likes,
        dislikes: body.dislikes,
        comments: body.comments,
        addedBy: body.addedBy.id,
    }

    const changedBook = await Book.findByIdAndUpdate(id, book, { new: true })
    res.status(200).json(changedBook)
})

module.exports = router
