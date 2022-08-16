import { createSlice } from '@reduxjs/toolkit'

import bookService from '../services/books'

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        setBooks(state, action) {
            return action.payload
        },
        addBook(state, action) {
            return state.concat(action.payload)
        },
    },
})

export const { setBooks, addBook } = bookSlice.actions
export default bookSlice.reducer

export const initializeBooks = () => {
    return async (dispatch) => {
        const books = await bookService.getAll()
        dispatch(setBooks(books))
    }
}

export const createBook = (newObject) => {
    return async (dispatch) => {
        const newBook = await bookService.create(newObject)
        dispatch(addBook(newBook))
    }
}
