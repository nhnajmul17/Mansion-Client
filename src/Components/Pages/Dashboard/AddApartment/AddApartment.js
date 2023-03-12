import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddApartment.css'

const AddApartment = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mansion-server.vercel.app/apartments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Apartment Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div>
            <h2>Add A Appartment</h2>
            <div className='addapartment-form mt-3 mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("picture")} placeholder='Place a image link here' />
                    <input {...register("name")} placeholder='Apartment Name' />
                    <input {...register("parking")} placeholder='Does Apartment Have Parking (Yes/No)' />
                    <input type="number" {...register("room")} placeholder='Apartment Numbers of Room' />
                    <input type="number" {...register("bath")} placeholder='Apartment Numbers of Bath' />
                    <input type="number" {...register("sqft")} placeholder='Apartment sqft Area' />
                    <input type="number" {...register("price")} placeholder='Apartment price' />
                    <textarea {...register("about")} placeholder='About Apartment' />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddApartment;