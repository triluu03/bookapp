import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initializeBooks } from './reducers/bookReducer'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {
    Container,
    AppBar,
    Toolbar,
    Button,
    Typography,
    Alert,
    AlertTitle,
} from '@mui/material'

import { Box } from '@mui/system'

import Home from './components/Home'
import BookList from './components/BookList'
import LoginForm from './components/LoginForm'
import Credits from './components/Credits'

import bookService from './services/books'

const App = () => {
    const [user, setUser] = useState(null)

    const notification = useSelector((state) => state.notification)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('logged-in-user')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            bookService.setToken(user.token)
        }
    }, [])

    const handleLogout = async (event) => {
        event.preventDefault()
        window.localStorage.removeItem('logged-in-user')
        setUser(null)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeBooks())
    }, [dispatch])

    if (!user) {
        return (
            <Box>
                <BrowserRouter>
                    <LoginForm setUser={setUser} />
                </BrowserRouter>
            </Box>
        )
    }

    return (
        <Container>
            <BrowserRouter className='app'>
                <AppBar position='static'>
                    <Toolbar>
                        <Button color='inherit' component={Link} to='/'>
                            Home
                        </Button>
                        <Button color='inherit' component={Link} to='/books'>
                            Books
                        </Button>
                        <Button color='inherit' component={Link} to='/credits'>
                            Credits
                        </Button>
                        {user ? (
                            <div>
                                <Typography variant='button'>
                                    {user.username} logged-in
                                </Typography>
                                <Button
                                    color='secondary'
                                    variant='contained'
                                    size='small'
                                    sx={{ ml: 1 }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Button
                                color='inherit'
                                component={Link}
                                to='/login'
                            >
                                Login
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
                {notification ? (
                    notification.type === 'alert' ? (
                        <Alert severity='error'>
                            <AlertTitle>Error</AlertTitle>
                            {notification.message}
                        </Alert>
                    ) : (
                        <Alert security='success'>
                            <AlertTitle>Success</AlertTitle>
                            {notification.message}
                        </Alert>
                    )
                ) : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/books' element={<BookList />} />
                    <Route
                        path='/login'
                        element={<LoginForm setUser={setUser} />}
                    />
                    <Route path='/credits' element={<Credits />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default App
