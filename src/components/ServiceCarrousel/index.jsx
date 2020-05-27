//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

//#endregion

const ServiceCarrousel = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <Grid container className={styles.background}></Grid>
        </Fragment>
    );
};

export default ServiceCarrousel;
