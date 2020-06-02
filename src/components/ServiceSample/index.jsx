//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import FormServiceSample from '../../components/FormServiceSample/index';

import TEXT from '../../library/text';
import useStyles from './styles';

//#endregion

const ServiceSample = () => {
    const styles = useStyles();
    const { SERVICE_SAMPLE_TITLE } = TEXT.HOME;

    const trigger = useScrollTrigger({
        threshold: 500,
        disableHysteresis: true,
    });

    return (
        <Fragment>
            <div className={styles.backgroundImage}>
                <Slide in={!trigger} direction={'right'} timeout={3000} mountOnEnter unmountOnExit>
                    <div className={styles.separator}>
                        <Fade in={!trigger} timeout={3000}>
                            <Grid container>
                                <Grid xs={1} item></Grid>
                                <Grid className={styles.background} xl={4} xs={10} item>
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
                        </Fade>
                    </div>
                </Slide>
            </div>
        </Fragment>
    );
};

export default ServiceSample;
