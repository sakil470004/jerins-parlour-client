import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Service(props) {
    const { name, description, img, price } = props.service;

    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="h6" component="div" style={{ color: '#f63e7b' }}>
                    $  {price}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}

                </Typography>

                {props.children}
            </CardContent>
        </Card>
    )
}
