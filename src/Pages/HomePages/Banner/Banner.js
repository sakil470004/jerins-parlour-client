import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import bannerPic from './../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

export default function Banner() {
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 500
    }
    return (
        <div style={{ background: '#fff8f5' }}>
            <Container >
                <Grid container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6} >
                        <Box >
                            <Typography sx={{ fontWeight: 700 ,fontSize:{xs:35,md:40,lg:55}}} variant='h2'>BEAUTY SALON<br />
                                FOR EVERY WOMEN
                            </Typography>
                            <Typography variant='h6' sx={{ my: 5, fontSize: 18, color: 'gray', fontWeight: 200 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur ullam tempora eos labore explicabo atque! Quisquam eveniet ipsa illum!
                            </Typography>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/services'>
                                <Button style={{ backgroundColor: '#f63e7b', padding: '16px' }} variant="contained">

                                    Get Appointment
                                </Button>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={12} md={6}>
                        <Box sx={{ width: { xs: 350, md: 450 } }}>
                            <img width='100%' alt='a beautiful women' src={bannerPic} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
