import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../../Shared/Navitgation/Navigation';
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails';

const AllApartments = () => {
    const [apartments, setApartments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/apartments')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])
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
        </>
    );
};

export default AllApartments;