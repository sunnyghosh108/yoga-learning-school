import React from 'react';
//import Category from '../../Category/Category';
//import Banner from './Home/Banner';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';
import Banner from './Home/Banner';
const Home = () => {
    return (
        <div>
             <Helmet>
             <title>Yoga school | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* <Category></Category> */}
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;