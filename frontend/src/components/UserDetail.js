import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const UserDetail = () => {
    const id = useParams().id
    const users = useSelector((state) => state.users)
    const user = users.find((u) => u.id === id.toString())

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3'>{user.username}</Typography>
            <Typography sx={{ mt: 1 }}>- Name: {user.name}</Typography>
            <Typography sx={{ mt: 1 }}>
                - Suggested books:{' '}
                {user.books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </Typography>
        </Box>
    )
}

export default UserDetail
