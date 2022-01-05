import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MesssageReviewer from './MessageReviewer'

export default function MesssageReviewers({ comments, setComments, isCommentChange }) {



    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
    }, [isCommentChange, setComments]);

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" >
                    Review We <span style={{ color: '#f63e7b' }}> Got Form Our Customer</span>
                </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }}
                        style={{  maxHeight: 400, overflowY: 'auto'}}
                        columns={{ xs: 4, sm: 8, md: 12 }}>
                        {comments.map((comment, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>

                                <MesssageReviewer
                                    comment={comment}
                                    key={comment._id}
                                >

                                </MesssageReviewer>
                            </Grid>
                        ))}
                    </Grid>
            </Container>
        </Box>
    )
}
