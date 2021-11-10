import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';


import feature1 from '../../../../images/features/feature1.JPG'
import feature2 from '../../../../images/features/feature2.JPG'
import feature3 from '../../../../images/features/feature3.JPG'
import feature4 from '../../../../images/features/feature4.JPG'

const Features = () => {
    return (

        <Box sx={{ flexGrow: 1, margin: 5, paddingTop: 5 }}>
            <Typography variant='h4' sx={{ fontStyle: 'oblique', fontWeight: 'bold', mb: 3 }} color="text.secondary">Living your way starts here </Typography>
            <Typography variant='h6' sx={{ mb: 3 }}>Thoughtfully Furnished & Locally Inspired  </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardContent>
                            <img src={feature1} alt="" />
                            <Typography sx={{ fontWeight: 'bold' }} variant='h5' color="text.secondary" gutterBottom>
                                Remote Ready
                            </Typography>
                            <Typography sx={{ typography: 'body1', fontWeight: 'medium' }} component="div">
                                High speed Internet (100 mbps), utilities, renter’s insurance, and washer & dryer included in every Bindel apartment.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardContent>
                            <img src={feature2} alt="" />
                            <Typography sx={{ fontWeight: 'bold' }} variant='h5' color="text.secondary" gutterBottom>
                                Professionally cleaned
                            </Typography>
                            <Typography sx={{ typography: 'body1', fontWeight: 'medium' }} component="div">
                                All of our apartments and homes are professionally cleaned and must pass a 100-point inspection.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardContent>
                            <img src={feature3} alt="" />
                            <Typography sx={{ fontWeight: 'bold' }} variant='h5' color="text.secondary" gutterBottom>
                                Work hard, play hard
                            </Typography>
                            <Typography sx={{ typography: 'body1', fontWeight: 'medium' }} component="div">
                                All of our properties are chosen for location. When your work day is over, you have the best of each city at your doorstep.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardContent>
                            <img src={feature4} alt="" />
                            <Typography sx={{ fontWeight: 'bold' }} variant='h5' color="text.secondary" gutterBottom>
                                Flexible lease terms
                            </Typography>
                            <Typography sx={{ typography: 'body1', fontWeight: 'medium' }} component="div">
                                Freedom and flexibility is our promise to you. Stay for 30-days or longer.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>


    );
};

export default Features;