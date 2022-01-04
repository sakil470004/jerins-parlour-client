import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MesssageReviewer(props) {
    const { name, description } = props.comment;
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 ,textAlign:'left'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}

                </Typography>
            </CardContent>

        </Card>
    )
}
