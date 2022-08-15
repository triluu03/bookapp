import { createSlice } from '@reduxjs/toolkit'

import bookService from '../services/books'

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        setBooks(state, action) {
            return action.payload
        },
    },
})

export const { setBooks } = bookSlice.actions
export default bookSlice.reducer

export const initializeBooks = () => {
    return async (dispatch) => {
        const books = await bookService.getAll()
        dispatch(setBooks(books))
    }
}
