import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useAuth()

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`https://polar-badlands-41295.herokuapp.com/mybookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])


    const handleDelete = (id) => {
        const confirm = window.confirm('If you Cancle your Booking, it will be removed permanently.')
        if (confirm) {
            fetch(`https://polar-badlands-41295.herokuapp.com/mybookings/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {


                    if (data.deletedCount) {
                        alert('Booking Cancled successfully.')
                        window.location.reload()

                    }
                });

        }

    }

    return (
        <div>
            <h1>My Bookings</h1>
            <Box sx={{ m: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bookings.map(booking => <Grid key={booking._id} item xs={4} sm={4} md={4}> <Card >

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {booking.apartmentName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rent: {booking.apartmentprice} <small>/month</small>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Area: {booking.apartmentArea}sq ft
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Booked By: {user.displayName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Booking Status: {booking.status}
                                </Typography>
                                <button onClick={() => handleDelete(booking._id)} className="btn bg-warning m-2 ">Cancle Booking</button>
                                {booking.payment ? 'Paid' : <Link to={`/dashboard/payment/${booking._id}`}> <button className="btn bg-warning m-2 ">Pay</button></Link>}

                            </CardContent>


                        </Card>  </Grid>)
                    }
                </Grid>
            </Box>
        </div >
    );
};

export default MyOrders;