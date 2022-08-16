import { TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

import { createBook } from '../reducers/bookReducer'

import { useDispatch } from 'react-redux'

const BookForm = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')

    const dispatch = useDispatch()

    const submit = async (event) => {
        event.preventDefault()
        try {
            dispatch(createBook({ name, author, published: Number(published) }))
            setName('')
            setAuthor('')
            setPublished('')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Box>
            <Typography variant='h4' component='div'>
                Add Book
            </Typography>
            <form onSubmit={submit}>
                <div>
                    <TextField
                        label='Name'
                        variant='outlined'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label='Author'
                        variant='outlined'
                        value={author}
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label='Published'
                        variant='outlined'
                        value={published}
                        onChange={({ target }) => setPublished(target.value)}
                    />
                </div>
                <Button type='submit'>Add Book</Button>
            </form>
        </Box>
    )
}

export default BookForm
