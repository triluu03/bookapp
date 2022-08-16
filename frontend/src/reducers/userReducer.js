import { createSlice } from '@reduxjs/toolkit'

const loggedUserSlice = createSlice({
    name: 'users',
    initialState: null,
    reducers: {
        setUsers(state, action) {
            return action.payload
        },
        addUser(state, action) {
            return state.concat(action.payload)
        },
    },
})

export const { setUsers, addUser } = loggedUserSlice.actions
export default loggedUserSlice.reducer
