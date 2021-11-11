import { TextField, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingForm = ({ openBooking, bookingClose, apartment, setBookingSuccess }) => {

    const { name, price, sqft } = apartment
    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = e => {
        e.preventDefault()

        //collect data
        const booking = {
            ...bookingInfo,
            apartmentName: name,
            apartmentprice: price,
            apartmentArea: sqft,
            status: 'pending'
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    bookingClose()

                }
            })

    }



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={bookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Book For {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={name}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name="userName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='phone'
                            onBlur={handleOnBlur}
                            placeholder='Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='price'
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            id="outlined-size-small"
                            name='sqft'
                            defaultValue={sqft}
                            size="small"
                        />
                        <Button type='submit' variant="outlined">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingForm;