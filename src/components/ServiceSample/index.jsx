//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import FormServiceSample from './../../containers/FormServiceSample/index';

import IMAGE from '../../library/image';
import TEXT from './../../library/text';

import useStyles from './styles';

//#endregion

const ServiceSample = () => {
    const styles = useStyles();
    const { SERVICE_SAMPLE_TITLE } = TEXT.HOME;

    return (
        <Fragment>
            <img className={styles.backgroundImage} src={IMAGE.GRAY_HOME_BACKGROUND} alt='Amostra de Serviço' />

            {/* <Grid className={styles.background} container>
                <Grid item>{SERVICE_SAMPLE_TITLE}</Grid>
                <Grid item>
                    <FormServiceSample />
                </Grid>
            </Grid> */}
        </Fragment>
    );
};

export default ServiceSample;
