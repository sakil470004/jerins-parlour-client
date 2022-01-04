import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MesssageReviewer from './MessageReviewer'

export default function MesssageReviewers() {


    const comments = [

        {
            name: 'Sakil',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis'
        },

        {
            name: 'Nayeem',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis'
        },

        {
            name: 'Tareq',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis'
        },

    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" >
                    Review We <span style={{ color: '#f63e7b' }}> Got Form Our Customer</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {comments.map((comment, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>

                            <MesssageReviewer
                            comment={comment}
                            key={index}
                            >

                            </MesssageReviewer>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    )
}
