import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import loginService from '../services/login'
import bookService from '../services/books'

import AccountForm from './AccountForm'

import { setLoggedUser } from '../reducers/loggedUserReducer'

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showAccountForm, setShowAccountForm] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submit = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            setUsername('')
            setPassword('')
            setUser(user)
            bookService.setToken(user.token)
            navigate('/')
            dispatch(setLoggedUser(user))
            window.localStorage.setItem('logged-in-user', JSON.stringify(user))
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            {showAccountForm ? (
                <Box sx={{ textAlign: 'center' }}>
                    <AccountForm />
                    <Button
                        onClick={() => setShowAccountForm(false)}
                        color='error'
                    >
                        cancel
                    </Button>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Typography variant='h3' component='div'>
                        Welcome to Book App
                    </Typography>
                    <Typography variant='h5' component='div'>
                        Designed by Luu Duc Tri
                    </Typography>
                    <Typography variant='h4' component='div' sx={{ mt: 6 }}>
                        Login to the app
                    </Typography>
                    <form onSubmit={submit}>
                        <div>
                            <TextField
                                label='username'
                                variant='standard'
                                value={username}
                                onChange={({ target }) =>
                                    setUsername(target.value)
                                }
                                sx={{ maxWidth: '75%', width: 300 }}
                            />
                        </div>
                        <div>
                            <TextField
                                label='password'
                                variant='standard'
                                type='password'
                                value={password}
                                onChange={({ target }) =>
                                    setPassword(target.value)
                                }
                                sx={{ maxWidth: '75%', width: 300 }}
                            />
                        </div>
                        <Button
                            sx={{ mt: 1 }}
                            variant='contained'
                            type='submit'
                        >
                            login
                        </Button>
                    </form>
                    <Button onClick={() => setShowAccountForm(true)}>
                        create new account
                    </Button>
                </Box>
            )}
        </div>
    )
}

export default LoginForm
