import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Credits = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box>
                <Typography variant='h4'>Credits</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant='body1'>
                    This project is designed and coded all by{' '}
                    <b>Luu, Duc Tri</b>. You can see the source code of this
                    project below.
                </Typography>
            </Box>
            <Box>
                <Typography>
                    <a href='https://github.com/triluu03/bookapp'>
                        Source code
                    </a>
                </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant='h4'>Contact</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>
                    <a href='https://www.linkedin.com/in/triluu03/'>LinkedIn</a>{' '}
                    <a href='https://github.com/triluu03'>GitHub</a>
                </Typography>
            </Box>
        </Box>
    )
}

export default Credits
