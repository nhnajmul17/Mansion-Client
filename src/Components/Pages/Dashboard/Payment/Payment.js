import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'


const stripePromise = loadStripe('pk_test_51K9vFeFcakfhm8VSCQxw3RimlrgkWRhGjrwg0F3kwI3IBqoWtnF7ew74HU8Ngb2KPGbNQRyEa1v9vpH37gBMZrBn00mqEe87MQ')

const Payment = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({})
    useEffect(() => {
        fetch(`https://polar-badlands-41295.herokuapp.com/bookings/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [bookingId])
    return (
        <div>
            <h3> Pay For {booking.apartmentName}</h3>
            <h3> Pay : ${booking.apartmentprice}</h3>
            {booking?.apartmentprice && <Elements stripe={stripePromise} >
                <CheckoutForm booking={booking} />
            </Elements>}
        </div>
    );
};

export default Payment;