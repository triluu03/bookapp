import { TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

import { createBook } from '../reducers/bookReducer'
import { notify } from '../reducers/notificationReducer'

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
            dispatch(
                notify({
                    message: `${name} by ${author} is added successfully`,
                    type: 'success',
                })
            )
            setName('')
            setAuthor('')
            setPublished('')
        } catch (error) {
            dispatch(notify({ message: error.message, type: 'alert' }))
        }
    }

    return (
        <Box sx={{ mt: 2, width: 300 }}>
            <Typography variant='h5' component='div'>
                Add Book
            </Typography>
            <form onSubmit={submit}>
                <div>
                    <TextField
                        label='Name'
                        size='small'
                        margin='dense'
                        variant='outlined'
                        fullWidth={true}
                        placeholder='Title of the book'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label='Author'
                        size='small'
                        margin='dense'
                        variant='outlined'
                        fullWidth={true}
                        placeholder='Name of the author'
                        value={author}
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label='Published'
                        size='small'
                        margin='dense'
                        variant='outlined'
                        fullWidth={true}
                        placeholder='Published Year'
                        value={published}
                        onChange={({ target }) => setPublished(target.value)}
                    />
                </div>
                <Button size='big' type='submit'>
                    Add Book
                </Button>
            </form>
        </Box>
    )
}

export default BookForm
