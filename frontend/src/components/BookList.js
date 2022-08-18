import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Button,
} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

import { useSelector, useDispatch } from 'react-redux'

import { likeBook, dislikeBook } from '../reducers/bookReducer'

const BookList = () => {
    const books = useSelector((state) => state.books)

    const dispatch = useDispatch()

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
                                <ThumbUpIcon sx={{ ml: 2 }} />
                            </TableCell>
                            <TableCell>
                                <ThumbDownIcon sx={{ ml: 2 }} />
                            </TableCell>
                            <TableCell>Recommended by</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell component='th' scope='row'>
                                    {book.name}
                                </TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.published}</TableCell>
                                <TableCell align='left'>
                                    <Button
                                        variant='outlined'
                                        onClick={() => dispatch(likeBook(book))}
                                    >
                                        {book.likes}
                                    </Button>
                                </TableCell>
                                <TableCell align='left'>
                                    <Button
                                        variant='outlined'
                                        onClick={() =>
                                            dispatch(dislikeBook(book))
                                        }
                                    >
                                        {book.dislikes}
                                    </Button>
                                </TableCell>
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
