import React from 'react'
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import Service from '../Service/Service';

import antiAge from './../../../Image_Icon/Icon/Group 1373.png'
import hairColor from './../../../Image_Icon/Icon/Group 1372.png'
import skinCare from './../../../Image_Icon/Icon/Group 1374.png'


import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const services = [

    {
        name: 'Anti Age Face Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis',
        img: antiAge,
        price: '$199'
    },

    {
        name: 'Hair Color & Styling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis',
        img: hairColor,
        price: '$99'
    },

    {
        name: 'Skin Care Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis',
        img: skinCare,
        price: '$299'
    },

]


export default function Services() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" >
                    Services We <span style={{ color: '#f63e7b' }}> Provide</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                                service={service}
                                key={service.name}
                            >

                            </Service>
                        </Grid>
                    ))}
                </Grid>
                <NavLink 
                to='/services'
                style={{ background: '#f63e7b', color: 'white', padding: '10px',textDecoration:'none',borderRadius:'15px' }} 
                sx={{ m: 4 }}
                
                >
                    Explore more
                </NavLink>
            </Container>
        </Box>
    )
}
