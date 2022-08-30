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
    TextField,
} from '@mui/material'
import { Box } from '@mui/system'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { likeBook, dislikeBook } from '../reducers/bookReducer'

import BookForm from './BookForm'
import { Link } from 'react-router-dom'

const BookList = () => {
    const [showBookForm, setShowBookForm] = useState(false)
    const [bookSearch, setBookSearch] = useState('')

    const books = useSelector((state) => state.books)
    const loggedUser = useSelector((state) => state.loggedUser)

    const dispatch = useDispatch()

    const booksToShow =
        bookSearch === ''
            ? books
            : books.filter((book) =>
                  book.name.toLowerCase().includes(bookSearch.toLowerCase())
              )

    console.log(bookSearch)

    return (
        <div>
            <Box>
                <Typography variant='h4' component='div' sx={{ mt: 3 }}>
                    Books List
                </Typography>
                <TextField
                    sx={{ mt: 1 }}
                    size='small'
                    placeholder='find a book'
                    value={bookSearch}
                    onChange={({ target }) => setBookSearch(target.value)}
                />
            </Box>
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
                        {booksToShow.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell component='th' scope='row'>
                                    <Link
                                        to={`/books/${book.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {book.name}
                                    </Link>
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
                                <TableCell>
                                    <Button
                                        component={Link}
                                        to={`/users/${book.addedBy.id}`}
                                    >
                                        {book.addedBy
                                            ? book.addedBy.name
                                            : loggedUser.name}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {showBookForm ? <BookForm /> : null}
            <Button
                onClick={() => setShowBookForm(!showBookForm)}
                color={showBookForm ? 'error' : 'primary'}
            >
                {showBookForm ? 'cancel' : 'suggest new book'}
            </Button>
        </div>
    )
}

export default BookList
