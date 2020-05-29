//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import FormServiceSample from '../../components/FormServiceSample/index';

import TEXT from '../../library/text';
import useStyles from './styles';

//#endregion

const ServiceSample = () => {
    const styles = useStyles();
    const { SERVICE_SAMPLE_TITLE } = TEXT.HOME;

    return (
        <Fragment>
            <div className={styles.backgroundImage}>
                <Grid xs={12} container>
                    <Grid xs={1} item></Grid>
                    <Grid className={styles.background} xl={5} xs={10} item>
                        <Grid item>
                            <span className={styles.text}>
                                {SERVICE_SAMPLE_TITLE[0]}
                                <br />
                                {SERVICE_SAMPLE_TITLE[1]}
                                <span className={styles.underlineText}>{SERVICE_SAMPLE_TITLE[2]}</span>
                                <br />
                                {SERVICE_SAMPLE_TITLE[3]}
                            </span>
                        </Grid>

                        <Grid item>
                            <FormServiceSample />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
};

export default ServiceSample;
