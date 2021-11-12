import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/error.jpeg'

const Error = () => {
    return (
        <div>
            <Link to='/home'>
                <button className='btn btn-danger'>Back To Home</button>

            </Link>

            <br />
            <img className='h-25 w-100' src={img} alt="" />

        </div>
    );
};

export default Error;