//#region Imports

import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar/index';
import Footer from '../../components/Footer/index';
import HomeCards from '../../components/HomeCards/index';
import ServiceSample from '../../components/ServiceSample/index';
import ServiceCarrousel from '../../containers/ServiceCarrousel/index';
import CategoryCarrousel from '../../containers/CategoryCarrousel/index';

//#endregion

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <ServiceSample />
            <HomeCards />
            <CategoryCarrousel />
            <ServiceSample />
            <ServiceCarrousel />
            <Footer />
        </Fragment>
    );
};

export default Home;
