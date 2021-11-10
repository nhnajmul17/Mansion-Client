import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import p1 from '../../../../images/partners/p01.jpg'
import p2 from '../../../../images/partners/p02.jpg'
import p3 from '../../../../images/partners/p03.jpg'
import p4 from '../../../../images/partners/p04.jpg'
import p5 from '../../../../images/partners/p05.jpg'
import p6 from '../../../../images/partners/p06.jpg'

const Partners = () => {
    return (
        <Box sx={{ margin: 3 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 5, fontStyle: 'oblique' }} color='text.secondary'>Our Partners companies including </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p1} alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p2} alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p3} alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p4} alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p5} alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '150px' }} src={p6} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Partners;