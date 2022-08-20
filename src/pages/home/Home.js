import React from 'react';
import Banner from './Banner';
import Pricing from './Pricing';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Services />
            <Pricing />
            <Testimonial />
        </div>
    );
};

export default Home;