import { Link, useParams } from 'react-router-dom'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const UserDetail = ({ users }) => {
    const id = useParams().id
    const user = users.find((u) => u.id === id.toString())

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3'>{user.username}</Typography>
            <Typography variant='subtitle2'>{user.name}</Typography>
            <Typography sx={{ mt: 1 }}>
                Suggested books:{' '}
                {user.books.map((book) => (
                    <li key={book.id}>
                        <Link
                            to={`/books/${book.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            {book.name}
                        </Link>
                    </li>
                ))}
            </Typography>
        </Box>
    )
}

export default UserDetail
