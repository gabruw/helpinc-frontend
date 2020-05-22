//#region Imports

import React, { Fragment } from 'react';

import IMAGES from '../../library/images';
import useStyles from './styles';

//#endregion

const Logo = ({ canRotate = false }) => {
    const styles = useStyles();

    const blueRect = canRotate ? styles.blueRectangleRotate : '';
    const grayRect = canRotate ? styles.grayRectangleRotate : styles.grayRectangleDefaultRotate;

    return (
        <Fragment>
            <div className={[styles.blueRectangle, blueRect].join(' ')}></div>
            <div className={[styles.grayRectangle, grayRect].join(' ')}></div>
            <img className={styles.hammer} src={IMAGES.HAMMER} alt='Help Inc.' />
        </Fragment>
    );
};

export default Logo;
