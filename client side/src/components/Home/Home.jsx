import React from 'react';
import Banner from './Banner/Banner';
import Brand from './Brand/Brand';
import Extra from './Extra/Extra';
import Marquee from './Marquee/Marquee';
import Awesome from './Awesome/Awesome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Extra></Extra>
            <Awesome></Awesome>
            <Marquee></Marquee>
        </div>
    );
};

export default Home;