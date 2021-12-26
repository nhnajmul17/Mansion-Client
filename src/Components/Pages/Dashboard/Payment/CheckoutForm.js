import React, { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ booking }) => {
    const { apartmentprice, userName, email, _id } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('https://polar-badlands-41295.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ apartmentprice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))

    }, [apartmentprice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
            setSuccess('')
        }
        else {
            setError('')
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            console.log(paymentIntent);
            setSuccess('Payment Successfull')
            setProcessing(false)
            //saveto database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                transaction: paymentIntent.client_secret.slice('_secret')[0]

            }
            const url = `https://polar-badlands-41295.herokuapp.com/bookings/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {

                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#424770',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                    Pay ${apartmentprice}
                </button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }

        </div>
    );
};

export default CheckoutForm;