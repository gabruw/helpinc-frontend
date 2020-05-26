//#region Imports

import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar/index';
import HomeCards from './../../components/HomeCards/index';
import ServiceSample from './../../components/ServiceSample/index';

//#endregion

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <ServiceSample />
            <HomeCards />
        </Fragment>
    );
};

export default Home;
