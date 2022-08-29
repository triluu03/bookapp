import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Typography, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

import { notify } from '../reducers/notificationReducer'

import userService from '../services/users'

const AccountForm = () => {
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
        <Box sx={{ textAlign: 'center', mt: 4 }}>
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
                            sx={{ maxWidth: '75%', width: 400 }}
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
                            sx={{ maxWidth: '75%', width: 400 }}
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
                            sx={{ maxWidth: '75%', width: 400 }}
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
                            sx={{ maxWidth: '75%', width: 400 }}
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
                            sx={{ maxWidth: '75%', width: 400 }}
                        />
                    </div>
                    <Button type='submit'>Create Account</Button>
                </form>
            </div>
        </Box>
    )
}

export default AccountForm
