import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Apartment from './Apartment/Apartment';
const Apartments = () => {
    const [apartments, setApartments] = useState([])
    useEffect(() => {
        fetch('https://polar-badlands-41295.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setApartments(data.slice(0, 6)))
    }, [])
    return (
        <Box sx={{ m: 5 }}>

            <Typography variant='h5' sx={{ color: '#3BB7B7', fontWeight: 'bold', mt: 5 }}>
                Apartments
            </Typography>
            <Typography variant='h3' sx={{ fontStyle: 'oblique', fontWeight: 'bold', mb: 3 }} color="text.secondary">
                Choose An Apartment
            </Typography>
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        apartments.map(apartment => <Apartment key={apartment._id}
                            apartment={apartment}></Apartment>)
                    }

                </Grid>
            </Box>

        </Box >
    );
};

export default Apartments;