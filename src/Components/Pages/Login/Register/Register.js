import { TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../Shared/Navitgation/Navigation';


const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loading, register, error } = useAuth()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData }
        newData[field] = value
        setLoginData(newData)
    }

    const handleRegister = e => {
        register(loginData.name, loginData.email, loginData.password, history)
        e.preventDefault()
    }

    return (
        <>
            <Navigation></Navigation>
            <div>
                <Typography variant='h4'>Register Now</Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        id="outlined-required"
                        label="Your Name"
                        name='name'
                        type='text'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        id="outlined-required"
                        label="Your Email"
                        name='email'
                        type='email'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        id="outlined-required"
                        label="Your Password"
                        name='password'
                        type='password'
                        onBlur={handleOnBlur}
                    />
                    <Button sx={{ width: '50%', m: 1 }} type='submit' variant='contained'>Register</Button> <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/login'>
                        <Button variant='text'> Already Registered? please Login</Button>
                    </NavLink>
                </form>
                {loading && <CircularProgress color="secondary" />}
                {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}

            </div>

        </>
    );
};

export default Register;