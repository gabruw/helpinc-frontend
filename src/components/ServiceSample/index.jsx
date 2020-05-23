//#region Imports

import React, { Fragment } from 'react';

import IMAGE from '../../library/image';
import useStyles from './styles';

//#endregion

const ServiceSample = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <img className={styles.backgroundImage} src={IMAGE.GRAY_HOME_BACKGROUND} alt='Amostra de Serviço' />
        </Fragment>
    );
};

export default ServiceSample;
