import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeBooks } from './reducers/bookReducer'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import BookList from './components/BookList'
import LoginForm from './components/LoginForm'
import Credits from './components/Credits'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeBooks())
    }, [dispatch])

    const style = {
        padding: 5,
    }

    return (
        <BrowserRouter className='app'>
            <div>
                <Link style={style} to='/'>
                    Home
                </Link>
                <Link style={style} to='/books'>
                    Books
                </Link>
                <Link style={style} to='/login'>
                    Login
                </Link>
                <Link style={style} to='/credits'>
                    Credits
                </Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/credits' element={<Credits />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
