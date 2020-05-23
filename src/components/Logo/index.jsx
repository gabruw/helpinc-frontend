//#region Imports

import React, { Fragment } from 'react';
import clsx from 'clsx';

import IMAGE from '../../library/image';
import useStyles from './styles';

//#endregion

const Logo = ({ canRotate = false, rectangleSize = 35, hammerSize = 25, marginTop = 11, marginLeft = 8 }) => {
    const styles = useStyles(rectangleSize, hammerSize, marginTop, marginLeft);

    const blueRect = clsx({
        [styles.blueRectangle]: true,
        [styles.blueRectangleRotate]: canRotate,
    });

    const grayRect = clsx({
        [styles.grayRectangle]: true,
        [styles.grayRectangleRotate]: canRotate,
        [styles.grayRectangleDefaultRotate]: !canRotate,
    });

    return (
        <Fragment>
            <div className={blueRect}></div>
            <div className={grayRect}></div>
            <img className={styles.hammer} src={IMAGE.HAMMER} alt='Help Inc.' />
        </Fragment>
    );
};

export default Logo;
