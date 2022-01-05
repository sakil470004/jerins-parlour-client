import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Service from '../HomePages/Service/Service'

export default function ServicesList() {
    const [servicesList, setServicesList] = useState([])
    const { user } = useAuth();

    const handleAddAppointment = (e) => {
        // alert(`AppointmentAdded ${e.name}`)
        // send data to the server
        // remove object id so that when it insert duplicate value can be insert possible
        let clone = Object.assign({}, e)
        // console.log(user.email)
        delete clone._id
        let newInfo={...clone,email:user.email,action:'pending'}
        fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert(`AppointmentAdded ${e.name}`)

                }
            })


    }

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
                        servicesList.map((service,index) => (
                            <Grid item xs={4} sm={4} md={4} 
                            key={index}
                            >
                                <Service
                                    service={service}
                                    
                                >
                                    <Button variant='outlined' sx={{ mt: 2 }}

                                        style={{ color: '#f63e7b' }}
                                        onClick={() => handleAddAppointment(service)}
                                    >
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
