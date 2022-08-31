import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Credits = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Box>
                <Typography variant='h4'>Credits</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant='body1'>
                    This project is designed and coded all by{' '}
                    <b>Luu, Duc Tri</b>. Here you can see the{' '}
                    <a href='https://github.com/triluu03/bookapp'>
                        source code
                    </a>{' '}
                    of this project.
                </Typography>
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography>
                    <a href='https://www.linkedin.com/in/triluu03/'>
                        <LinkedInIcon fontSize='large' color='primary' />
                    </a>{' '}
                    <a href='https://github.com/triluu03'>
                        <GitHubIcon fontSize='large' color='primary' />
                    </a>
                </Typography>
            </Box>
        </Box>
    )
}

export default Credits
