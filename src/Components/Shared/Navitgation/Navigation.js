import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'

const Navigation = () => {
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >

    );
};

export default Navigation;