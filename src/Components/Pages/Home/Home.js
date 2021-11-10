import React from 'react';
import Navigation from '../../Shared/Navitgation/Navigation';
import Banner from './Banner';
import Features from './Features/Features';
import Partners from './Partners/Partners';
import Apartments from './Apartments/Apartments'
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Apartments></Apartments>
            <Features></Features>
            <Review></Review>
            <Partners></Partners>
        </div>
    );
};

export default Home;