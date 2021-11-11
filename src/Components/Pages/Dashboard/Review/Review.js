import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const [reviewSuccess, setReviewSuccess] = useState(false)
    const initialData = { name: user.displayName, img: '', reviews: '', rating: '' }
    const [reviewData, setReviewData] = useState(initialData)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...reviewData }
        newData[field] = value
        setReviewData(newData)
    }

    const handleReviewSubmit = e => {
        e.preventDefault()
        const reviews = {
            ...reviewData
        }
        fetch('https://polar-badlands-41295.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewSuccess(true)
                }
            })
    }
    return (
        <div>
            <h2>Give Your Feedback .</h2>
            {reviewSuccess && <Alert severity="success"> Thank you for your valuable feedback!</Alert>}
            <form onSubmit={handleReviewSubmit}>
                <TextField

                    sx={{ width: '75%', m: 2 }}
                    id="outlined-size-small"
                    name="name"
                    label='Your Name'
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField

                    sx={{ width: '75%', m: 2 }}
                    id="outlined-size-small"
                    name="img"
                    label='Your Image'
                    placeholder='Drop a image link'
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="outlined-multiline-static"
                    name='reviews'
                    label="Write your Review Here"
                    onBlur={handleOnBlur}
                    multiline
                    rows={4}

                />
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="outlined-size-small"
                    name='rating'
                    label='Rate us in 0-5'
                    type='number'
                    onBlur={handleOnBlur}
                    size="small"
                /> <br />
                <Button type='submit' variant="outlined">Submit</Button>
            </form>
        </div>
    );
};

export default Review;