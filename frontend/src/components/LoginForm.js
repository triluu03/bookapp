import { Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import loginService from '../services/login'
import bookService from '../services/books'

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submit = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            setUsername('')
            setPassword('')
            setUser(user)
            bookService.setToken(user.token)
            navigate('/')
            window.localStorage.setItem('logged-in-user', JSON.stringify(user))
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <Typography variant='h4' component='div'>
                Login
            </Typography>
            <form onSubmit={submit}>
                <div>
                    <TextField
                        label='username'
                        variant='standard'
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label='password'
                        variant='standard'
                        type='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <Button variant='contained' type='submit'>
                    login
                </Button>
            </form>
        </div>
    )
}

export default LoginForm
