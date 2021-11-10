import { TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../Shared/Navitgation/Navigation';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, login, loading, error } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        login(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }


    return (
        <>
            <Navigation></Navigation>
            <div>
                <Typography variant='h4'>Login Please</Typography>
                <form onSubmit={handleLogin}>

                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        id="outlined-required"
                        label="Your Email"
                        type='email'
                        name='email'
                        onBlur={handleOnBlur}

                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        id="outlined-required"
                        label="Your Password"
                        type='password'
                        name='password'
                        onBlur={handleOnBlur}
                    />
                    <Button sx={{ width: '50%', m: 1 }} type='submit' variant='contained'>Login</Button> <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/register'>
                        <Button variant='text'> New User? please Register</Button>
                    </NavLink>

                </form>
                {loading && <CircularProgress color="secondary" />}
                {user?.email && <Alert severity="success">Login Successfull!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}

            </div>
        </>

    );
};

export default Login;