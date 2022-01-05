import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Service from '../HomePages/Service/Service'

export default function ServicesList() {
    const [servicesList, setServicesList] = useState([])
    useState(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServicesList(data))
    }, [])
    return (
        <Box>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" >
                    Services We <span style={{ color: '#f63e7b' }}> Provide</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        servicesList.map(service => (
                            <Grid item xs={4} sm={4} md={4} >
                                <Service
                                    service={service}
                                    key={service.index}
                                >
                                <Button variant='outlined' sx={{mt:2}}>
                                    Buy
                                </Button>

                                </Service>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}
