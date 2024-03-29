import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navitgation/Navigation';
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails';

const AllApartments = () => {
    const [apartments, setApartments] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://mansion-server.vercel.app/apartments')
            .then(res => res.json())
            .then(data => {
                setApartments(data)
                setLoading(false)
            })
    }, [])
    if (loading) { return <LinearProgress color="success" /> }

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ m: 5 }}>

                <Typography variant='h5' sx={{ color: '#3BB7B7', fontWeight: 'bold', mt: 5 }}>
                    Our All Apartments Are Here
                </Typography>
                <Typography variant='h3' sx={{ fontStyle: 'oblique', fontWeight: 'bold', mb: 3 }} color="text.secondary">
                    Choose Your's
                </Typography>
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            apartments.map(apartment => <ApartmentDetails key={apartment._id}
                                apartment={apartment}></ApartmentDetails>)
                        }

                    </Grid>
                </Box>

            </Box >
            <Footer></Footer>
        </>
    );
};

export default AllApartments;