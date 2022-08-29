import { configureStore } from '@reduxjs/toolkit'

import bookReducer from './reducers/bookReducer'
import usersReducer from './reducers/usersReducer'
import loggedUserReducer from './reducers/loggedUserReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
        books: bookReducer,
        users: usersReducer,
        loggedUser: loggedUserReducer,
        notification: notificationReducer,
    },
})

export default store
