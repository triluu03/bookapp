import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useParams } from 'react-router-dom'

const BookDetails = ({ books }) => {
    const id = useParams().id
    const book = books.find((b) => b.id === id)

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3'>{book.name}</Typography>
        </Box>
    )
}

export default BookDetails
