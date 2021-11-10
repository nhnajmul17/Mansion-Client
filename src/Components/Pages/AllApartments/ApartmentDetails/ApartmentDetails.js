import React from 'react';
import { Card, CardContent, CardMedia, Grid, Button, Typography, CardActions } from '@mui/material';

const ApartmentDetails = (props) => {
    const { name, picture, price, sqft, room, bath, parking } = props.apartment
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
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
                    <Typography variant="body2" color="text.secondary">
                        {room} Rooms and {bath} Bath <br />
                        Parking: {parking}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='warning' size="small">Book Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ApartmentDetails;