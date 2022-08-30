import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { commentBook } from '../reducers/bookReducer'

const BookDetails = ({ books }) => {
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const id = useParams().id
    const book = books.find((b) => b.id === id)

    const handleComment = (event) => {
        event.preventDefault()

        dispatch(commentBook(book, comment))
        setComment('')
    }

    return (
        <Box sx={{ mt: 2 }}>
            <Box>
                <Typography variant='h3'>{book.name}</Typography>
                <Typography variant='subtitle1'>
                    by {book.author}, published in {book.published}
                </Typography>
                <Typography variant='caption'>
                    Ratings:{' '}
                    {book.likes + book.dislikes === 0
                        ? 'No reviews'
                        : (book.likes * 5) / (book.likes + book.dislikes)}
                </Typography>
            </Box>
            <Box sx={{ mt: 3, mb: 2 }}>
                <Typography variant='h5'>Comments</Typography>
                {book.comments.map((comment) => (
                    <Typography sx={{ ml: 2 }} key={comment}>
                        - {comment}
                    </Typography>
                ))}
            </Box>
            <form onSubmit={handleComment}>
                <div>
                    <TextField
                        size='small'
                        placeholder='write a comment'
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
                        sx={{ width: 250, maxWidth: '75%' }}
                    />
                </div>
                <Button type='submit'>add comment</Button>
            </form>
        </Box>
    )
}

export default BookDetails
