import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageApartments = () => {

    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch('https://mansion-server.vercel.app/apartments')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])


    const handleDelete = id => {
        const confirm = window.confirm('Do you really want to delete this Apartment?')
        if (confirm) {
            fetch(`https://mansion-server.vercel.app/apartments/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {

                    if (data.deletedCount) {
                        alert('Apartment Deleted Successfully.')
                        const remaining = apartments.filter(apartment => apartment._id !== id)
                        setApartments(remaining)

                    }
                });

        }
    }
    return (
        <div>
            <h2>Manage Apartments</h2>
            <Box sx={{ m: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        apartments.map(apartment => <Grid key={apartment._id} item xs={4} sm={4} md={4}> <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={apartment.picture}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {apartment.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rent: {apartment.price} <small>/month</small>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Area: {apartment.sqft}sq ft
                                </Typography>
                                <button onClick={() => handleDelete(apartment._id)} className="btn bg-warning m-2 "> <FontAwesomeIcon icon={faTrash} className='text-dark' /> Delete Apartment</button>
                            </CardContent>

                        </Card>  </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default ManageApartments;