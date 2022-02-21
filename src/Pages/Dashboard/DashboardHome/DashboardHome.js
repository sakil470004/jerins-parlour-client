import React, { useEffect, useState } from 'react'
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



import DashboardHomeCard from './DashboardHomeCard';
import useAuth from '../../../hooks/useAuth';



export default function DashboardHome() {
    const [services, setServices] = useState([])
    const { user } = useAuth()
    useEffect(() => {

        fetch(`https://jerins-parlour--server.herokuapp.com/appointmentUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data));


    }, [user.email])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>


                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 4, md: 8 ,lg:12}}>
                    {services.map((service, index) => (
                        <Grid item sm={4} md={4} lg={4}
                            key={index}
                        >
                            <DashboardHomeCard
                                service={service}
                            >

                            </DashboardHomeCard>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    )
}
