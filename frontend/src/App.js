import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeBooks } from './reducers/bookReducer'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Container, AppBar, Toolbar, Button } from '@mui/material'

import Home from './components/Home'
import BookList from './components/BookList'
import LoginForm from './components/LoginForm'
import Credits from './components/Credits'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeBooks())
    }, [dispatch])

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
                        <Button color='inherit' component={Link} to='/login'>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/books' element={<BookList />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/credits' element={<Credits />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default App
