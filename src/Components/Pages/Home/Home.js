import React from 'react';
import Navigation from '../../Shared/Navitgation/Navigation';
import Apartments from './Apartments/Apartments';
import Banner from './Banner';
import Features from './Features/Features';
import Partners from './Partners/Partners';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Apartments></Apartments>
            <Features></Features>
            <Partners></Partners>
        </div>
    );
};

export default Home;