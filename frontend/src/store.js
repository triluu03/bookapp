import { configureStore } from '@reduxjs/toolkit'

import bookReducer from './reducers/bookReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
        books: bookReducer,
        users: userReducer,
        notification: notificationReducer,
    },
})

export default store
