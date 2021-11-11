import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.jpg'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#3BB7B7' }}>
                <Toolbar>
                    <img src={logo} style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="" />
                    <Link style={{ textDecoration: 'none', color: 'white', margin: '5px', fontWeight: 'bold' }} to='/home'>Home</Link>
                    <Link style={{ textDecoration: 'none', color: 'white', margin: '5px', fontWeight: 'bold' }} to='/apartments'>Apartments</Link>

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Mansion Residence
                    </Typography>
                    {user?.email && <Typography variant="body1" component="div" >
                        Name: {user.displayName}
                    </Typography>}

                    {user?.email ? <Button onClick={logOut} color="inherit">Logout</Button> : <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'> <Button color="inherit">Login</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box >

    );
};

export default Navigation;