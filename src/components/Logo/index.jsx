//#region Imports

import React, { Fragment } from 'react';

import IMAGE from '../../library/image';
import useStyles from './styles';

//#endregion

const Logo = ({ canRotate = false, rectangleSize = 35, hammerSize = 25, marginTop = 11, marginLeft = 8 }) => {
    const styles = useStyles(rectangleSize, hammerSize, marginTop, marginLeft);

    const blueRect = canRotate ? styles.blueRectangleRotate : '';
    const grayRect = canRotate ? styles.grayRectangleRotate : styles.grayRectangleDefaultRotate;

    return (
        <Fragment>
            <div className={[styles.blueRectangle, blueRect].join(' ')}></div>
            <div className={[styles.grayRectangle, grayRect].join(' ')}></div>
            <img className={styles.hammer} src={IMAGE.HAMMER} alt='Help Inc.' />
        </Fragment>
    );
};

export default Logo;
