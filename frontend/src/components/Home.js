import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import Credits from './Credits'
import { BookInHome } from './BookList'

const About = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box>
                <Typography variant='h4'>Welcome to BookApp</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant='body1'>
                    BookApp is one of my personal projects. The idea behind this
                    app is trying to make a platform for people (users) to share
                    their favorite books to others and also give their thoughts
                    about specific books. You can see the list of suggested
                    books by clicking the button "BOOKS" on the menu bar above.
                </Typography>
            </Box>
        </Box>
    )
}

const Home = () => {
    return (
        <div>
            <About />
            <BookInHome />
            <Credits />
        </div>
    )
}

export default Home
