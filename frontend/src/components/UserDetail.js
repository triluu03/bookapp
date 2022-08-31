import { Link, useParams } from 'react-router-dom'

import { Box } from '@mui/system'
import {
    Typography,
    List,
    ListItem,
    ListItemButton,
    Divider,
} from '@mui/material'

const UserDetail = ({ users }) => {
    const id = useParams().id
    const user = users.find((u) => u.id === id.toString())

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3'>{user.username}</Typography>
            <Typography variant='subtitle2'>{user.name}</Typography>
            <Typography sx={{ mt: 1 }}>
                <Typography variant='subtitle1'>Suggested books:</Typography>
                <List>
                    {user.books.map((book) => (
                        <ListItem key={book.id}>
                            <ListItemButton>
                                <Link
                                    to={`/books/${book.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    "{book.name}" by {book.author}
                                </Link>
                            </ListItemButton>
                            <Divider />
                        </ListItem>
                    ))}
                </List>
            </Typography>
        </Box>
    )
}

export default UserDetail
