import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'

import { notify } from '../reducers/notificationReducer'

import userService from '../services/users'

const About = () => {
    return (
        <Box sx={{ mt: 1 }}>
            <div>
                <Typography variant='h4'>About</Typography>
            </div>
            <div>
                <Typography variant='body1'>
                    BookApp is one of my personal projects. The idea behind this
                    app is trying to make a platform for people (users) to share
                    their favorite books to others and also give their thoughts
                    about specific books. You can see the list of suggested
                    books by clicking the button "BOOKS" on the menu bar above.
                    If you want to suggest, like, or dislike a book, please
                    login as an user or create an account (if you don't have one
                    yet).
                </Typography>
            </div>
        </Box>
    )
}

const CreateAccount = () => {
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const dispatch = useDispatch()

    const submit = async (event) => {
        event.preventDefault()

        if (password !== repeatedPassword) {
            dispatch(
                notify({
                    message: 'Password and repeated password is not identical',
                    type: 'alert',
                })
            )
            return
        }

        try {
            const newUser = await userService.create({
                name,
                birthDate,
                username,
                password,
            })
            dispatch(
                notify({
                    message: `${newUser.username} is created`,
                    type: 'success',
                })
            )
            setName('')
            setBirthDate('')
            setUsername('')
            setPassword('')
            setRepeatedPassword('')
        } catch (error) {
            dispatch(notify({ message: error.message, type: 'alert' }))
            setName('')
            setBirthDate('')
            setUsername('')
            setPassword('')
            setRepeatedPassword('')
        }
    }

    return (
        <Box sx={{ width: 360, mt: 1 }}>
            <div>
                <Typography variant='h4'>Create an account</Typography>
            </div>
            <div>
                <form onSubmit={submit}>
                    <div>
                        <TextField
                            size='small'
                            label='Name'
                            placeholder='Enter your name or nickname'
                            margin='dense'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            size='small'
                            label='Birth Date'
                            placeholder='YYYY-MM-DD'
                            margin='dense'
                            value={birthDate}
                            onChange={({ target }) =>
                                setBirthDate(target.value)
                            }
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            size='small'
                            label='Username'
                            margin='dense'
                            placeholder='Enter your username'
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            size='small'
                            label='Password'
                            type='password'
                            margin='dense'
                            placeholder='Enter your password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            size='small'
                            label='Repeat Password'
                            type='password'
                            margin='dense'
                            placeholder='Repeat your password'
                            value={repeatedPassword}
                            onChange={({ target }) =>
                                setRepeatedPassword(target.value)
                            }
                            fullWidth={true}
                        />
                    </div>
                    <Button type='submit'>Create Account</Button>
                </form>
            </div>
        </Box>
    )
}

const Home = () => {
    return (
        <div>
            <About />
            <CreateAccount />
        </div>
    )
}

export default Home
