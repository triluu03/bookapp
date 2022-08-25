import { createSlice } from '@reduxjs/toolkit'

const NotificationSlice = createSlice({
    name: 'notifcation',
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
    },
})

export const { setNotification } = NotificationSlice.actions
export default NotificationSlice.reducer
