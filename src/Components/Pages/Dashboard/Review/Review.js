import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [reviewSuccess, setReviewSuccess] = useState(false)

    const onSubmit = data => {
        axios.post('https://polar-badlands-41295.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    setReviewSuccess(true)
                    reset();
                }
            })
    };
    return (
        <div>
            <h2>Give Your Feedback .</h2>
            {reviewSuccess && <Alert severity="success"> Thank you for your valuable feedback!</Alert>}
            <div className='review-form mt-3 mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} required defaultValue={user?.displayName} placeholder='Your Name' />
                    <input {...register("img")} placeholder='Your image link' />
                    <input type="number" {...register("rating", { min: 0, max: 5 })} required placeholder='Rate us 0-5' />
                    {errors.rating && <p className='text-danger'>"Rating value should between 0-5"</p>}
                    <textarea {...register("reviews")} required placeholder=' Your Feedback Message' />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;