import { CircularProgress, Button, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../../Shared/Navitgation/Navigation';
import BookingForm from '../BookingForm/BookingForm';

const Booking = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [bookingSuccess, setBookingSuccess] = useState(false)
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const bookingClose = () => setOpenBooking(false);


    const [apartment, setApartment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/apartments/${id}`)
            .then(res => res.json())
            .then(data => {
                setApartment(data)
                setLoading(false)
            })
    }, [id])

    if (loading) { return <CircularProgress color="secondary" /> }
    return (
        <div>
            <Navigation></Navigation>
            {bookingSuccess && <Alert severity="success"> Booked Successfully!</Alert>}
            <div className='m-3'>
                <h1 className='text-warning'>{apartment?.name} </h1>
                <img className='rounded' src={apartment.picture} alt="" />
                <p className='m-5'>{apartment.about}</p>
                <h2 style={{ color: 'gray' }}>It includes {apartment.room} Rooms and {apartment.bath} Bath</h2>
                <h3 className='text-info'>Monthly rent {apartment.price} only</h3>
                <h2>{apartment.sqft} sqft Apartment </h2>
                <p style={{ fontWeight: 'bold' }} >Parking Facilities: {apartment.parking}</p>
                <Button onClick={handleOpenBooking} variant="contained">Book Apartment</Button>
            </div>
            <BookingForm
                openBooking={openBooking}
                bookingClose={bookingClose}
                setBookingSuccess={setBookingSuccess}
                apartment={apartment}></BookingForm>
        </div>
    );
};

export default Booking;