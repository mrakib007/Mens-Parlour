import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Advertise from '../Advertise/Advertise';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards/>
            <Advertise/>
            <Testimonials/>
        </div>
    );
};

export default Home;