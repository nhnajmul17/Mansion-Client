import React from 'react';
import { Card, CardContent, CardMedia, Grid, Button, Typography, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './Apartment.css'
const Apartment = (props) => {
    const { name, picture, price, sqft, _id } = props.apartment
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card className='photo' sx={{ maxWidth: 345 }}>
                <CardMedia
                    className='image'
                    component="img"
                    height="140"
                    image={picture}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rent: ${price} <small>/month</small>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Area: {sqft}sq ft
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ textDecoration: 'none' }} to={`/booking/${_id}`}>  <Button variant='contained' color='warning' size="small">Book Now</Button></Link>
                </CardActions>
            </Card>
        </Grid >

    );
};

export default Apartment;