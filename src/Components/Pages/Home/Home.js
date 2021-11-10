import React from 'react';
import Navigation from '../../Shared/Navitgation/Navigation';
import Apartments from './Apartments/Apartments';
import Banner from './Banner';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Apartments></Apartments>
            <Features></Features>
        </div>
    );
};

export default Home;