import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons'

const ManageAllBookings = () => {

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://mansion-server.vercel.app/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const confirm = window.confirm('Do you really want to delete this Booking?')
        if (confirm) {
            fetch(`https://mansion-server.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {


                    if (data.deletedCount) {
                        alert('Booking Deleted Successfully.')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)

                    }
                });

        }

    }

    const handleUpdate = (id) => {
        const url = `https://mansion-server.vercel.app/bookings/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    window.location.reload();

                }
            })
    }

    return (
        <div>
            <h2>Manage Bookings</h2>
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
                                    Booked By: {booking.userName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Booking Email: {booking.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Booking Status: {booking.status}
                                </Typography>
                                <button onClick={() => handleDelete(booking._id)} className="btn bg-warning m-2 "> <FontAwesomeIcon icon={faTrash} className='text-dark' /> Delete Booking</button>
                                <button onClick={() => handleUpdate(booking._id)} className="btn bg-warning m-2 "> <FontAwesomeIcon icon={faPenAlt} className='text-dark' /> Update Booking</button>
                            </CardContent>


                        </Card>  </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default ManageAllBookings;