const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.get('/', async (req, res) => {
    const users = await User.find({}).populate('books', {
        name: 1,
        author: 1,
        published: 1,
    })
    res.json(users)
})

router.post('/', async (req, res) => {
    const { name, birthDate, username, password } = req.body

    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(400).json({ error: 'Username has been used' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        name,
        birthDate: new Date(birthDate),
        username,
        passwordHash,
    })

    const savedUser = await user.save()
    res.status(201).json(savedUser)
})

module.exports = router
