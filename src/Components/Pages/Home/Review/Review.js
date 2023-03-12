import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import bg from '../../../../images/review.JPG'

const bgBanner = {
    background: `url(${bg})`,
    marginBottom: 100

}


const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mansion-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <Box style={bgBanner} sx={{ m: 5 }}>
            <Typography variant='h5' sx={{ color: '#3BB7B7', fontWeight: 'bold', mt: 5 }}>
                TESTIMONIAL
            </Typography>
            <Typography variant='h3' sx={{ fontStyle: 'oblique', fontWeight: 'bold', mb: 3 }} color="text.secondary">
                What Client's Say
            </Typography>
            <Box sx={{ m: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Grid key={review._id} item xs={4} sm={4} md={4}> <Card >
                            <CardContent>
                                <Typography variant="body1" sx={{ mb: 3 }} component="div">
                                    "{review.reviews}"
                                </Typography>
                                <Avatar sx={{ mx: "auto", height: '60px', width: '70px' }} alt="Remy Sharp" src={review.img} />
                                <Typography variant='h6' color="text.secondary" gutterBottom>
                                    -{review.name}
                                </Typography>
                                <Rating name="read-only" value={review.rating} readOnly />
                            </CardContent>

                        </Card>  </Grid>)
                    }

                </Grid>
            </Box>
        </Box>




    );
};

export default Review;