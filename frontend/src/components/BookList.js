import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

import { useSelector } from 'react-redux'

const BookList = () => {
    const books = useSelector((state) => state.books)
    return (
        <div>
            <Typography variant='h4' component='div' sx={{ mt: 4 }}>
                Books List
            </Typography>
            <TableContainer component={Paper} variant='contained'>
                <Table aria-label='books list'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Published</TableCell>
                            <TableCell>
                                <ThumbUpIcon />
                            </TableCell>
                            <TableCell>
                                <ThumbDownIcon />
                            </TableCell>
                            <TableCell>Recommended by</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow>
                                <TableCell component='th' scope='row'>
                                    {book.name}
                                </TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.published}</TableCell>
                                <TableCell>{book.likes}</TableCell>
                                <TableCell>{book.dislikes}</TableCell>
                                <TableCell>{book.addedBy.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BookList
