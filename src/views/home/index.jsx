//#region Imports

import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar/index';
import ServiceSample from './../../components/ServiceSample/index';

//#endregion

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <ServiceSample />
        </Fragment>
    );
};

export default Home;
