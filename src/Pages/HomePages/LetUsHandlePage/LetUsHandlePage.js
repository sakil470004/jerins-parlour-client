import { Box,  Container, Grid, Typography } from '@mui/material'
import React from 'react'
import imgProfession from './../../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

export default function LetUsHandlePage() {
    return (
        <div style={{ backgroundColor: '#fff8f5', marginTop: '30px' }} >
            <Container sx={{ py: 5 }} >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} style={{ backgroundColor: '#fff8f5', marginTop: '30px', display: 'flex', justifyContent: 'center' }} >

                        <img src={imgProfession} style={{ width: '100%' }} alt='imgProfession' />
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            alignItems: 'center',

                        }}
                    >
                        <Box>
                            <Typography variant='h3' >
                                Let us handle your screen <span style={{ color: '#f63e7b' }}>Professionally</span>
                            </Typography>
                            <Typography variant='h6' sx={{ my: 5 }} style={{ fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis iusto suscipit quidem pariatur amet atque a explicabo
                            </Typography>
                            <Box style={{ display: 'flex' }}>
                                <Box>  <Typography variant='body2' >
                                    <span style={{ color: '#f63e7b', fontSize: '35px' }}> 500+ </span>
                                    <br />  Happy Customer
                                </Typography> </Box>
                                <Box style={{ marginLeft: '25px' }}>  <Typography variant='body2' >
                                    <span style={{ color: '#f63e7b', fontSize: '35px' }}> 16+ </span>
                                    <br />  Total Service
                                </Typography> </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
