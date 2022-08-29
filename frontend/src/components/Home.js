import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const About = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box>
                <Typography variant='h4'>About</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant='body1'>
                    BookApp is one of my personal projects. The idea behind this
                    app is trying to make a platform for people (users) to share
                    their favorite books to others and also give their thoughts
                    about specific books. You can see the list of suggested
                    books by clicking the button "BOOKS" on the menu bar above.
                    If you want to suggest, like, or dislike a book, please
                    login as an user or create an account (if you don't have one
                    yet).
                </Typography>
            </Box>
        </Box>
    )
}

const Home = () => {
    return (
        <div>
            <About />
        </div>
    )
}

export default Home
