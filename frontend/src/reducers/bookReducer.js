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
        modifyBook(state, action) {
            const id = action.payload.id
            return state.map((book) =>
                book.id === id
                    ? { ...action.payload, addedBy: book.addedBy }
                    : book
            )
        },
    },
})

export const { setBooks, addBook, modifyBook } = bookSlice.actions
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

export const likeBook = (bookObject) => {
    return async (dispatch) => {
        const newBook = await bookService.modify(bookObject.id, {
            ...bookObject,
            likes: bookObject.likes + 1,
        })
        dispatch(modifyBook(newBook))
    }
}

export const dislikeBook = (bookObject) => {
    return async (dispatch) => {
        const newBook = await bookService.modify(bookObject.id, {
            ...bookObject,
            dislikes: bookObject.dislikes + 1,
        })
        dispatch(modifyBook(newBook))
    }
}
