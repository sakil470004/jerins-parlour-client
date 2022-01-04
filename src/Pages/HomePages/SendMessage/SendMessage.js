import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'

export default function SendMessage() {
    return (
        <div style={{ backgroundColor: '#fff8f5', paddingTop: '20px' }}>
            <Container>
                <Typography variant="h4" component="div">
                    Send Review From Here
                </Typography>
                <TextField

                    sx={{ width: '50%', m: 1 }}

                    label="Your Name"
                    variant="standard"
                    name='name'
                // onBlur={handleOnBlur}
                />
                <TextField

                    sx={{ width: '50%', m: 1 }}

                    label="Your Email"
                    variant="standard"
                    name='email'
                    type='email'
                // onBlur={handleOnBlur}
                />
                <TextareaAutosize
                    maxRows={4}
                    aria-label="100px"
                    placeholder="Enter your message"
                    style={{ width: '50%', height: '100px', margin: '10px' }}
                />
                <Button variant='outline' sx={{width:'50%'}}>Submit</Button>
            </Container>
        </div>
    )
}
