import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faDiscord, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import logo from '../../../images/logo.jpg'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#3BB7B7' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img
                        src={logo}
                        width="70"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Mansion logo"
                    />
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Manison Residence</Typography>
                    <Typography variant='body1'><FontAwesomeIcon icon={faMailBulk} className='text-secondary' /> Email: mansion@residence.com</Typography>
                    <Typography variant='body1'><FontAwesomeIcon icon={faPhone} className='text-secondary' />  Phone: +889-1234567</Typography>
                    <Typography variant='body1'><FontAwesomeIcon icon={faMapMarkerAlt} className='text-secondary' /> 2159 Brooklyn, United States</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Explore</Typography>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'black' }} > <Typography variant='body1'>Home</Typography></Link>
                    <Link to='/apartments' style={{ textDecoration: 'none', color: 'black' }} >  <Typography variant='body1'>Apartments</Typography></Link>
                    <Typography variant='body1'>Services</Typography>
                    <Typography variant='body1'>Contact Us</Typography>
                    <Typography variant='body1'>About Us</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Connect</Typography>
                    <Typography variant='body1'>  <a href="https://www.facebook.com/">  <FontAwesomeIcon icon={faFacebook} className='text-primary fs-4 me-2' /> </a>
                        <a href="https://www.youtube.com/">  <FontAwesomeIcon icon={faYoutube} className='text-danger fs-4 me-2' /> </a>
                        <a href="https://www.discord.com/">  <FontAwesomeIcon icon={faDiscord} className='text-secondary fs-4 me-2' /> </a>
                        <a href="https://www.twitter.com/">  <FontAwesomeIcon icon={faTwitterSquare} className='text-info fs-4 me-2' /> </a></Typography>
                    <Typography variant='body1'>We bring the years, global experience, and stamina to guide our clients through new.</Typography>

                </Grid>

            </Grid>
            <Typography className='text-center'> &copy;2021 All right reserved by Mansion</Typography>
        </div>
    );
};

export default Footer;