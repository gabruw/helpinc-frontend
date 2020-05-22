//#region Imports

import React, { Fragment } from 'react';

import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './styles';

//#endregion

const ScrollTop = (props) => {
    const { children } = props;
    const styles = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (document) => {
        const anchor = document.querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Fragment>
            <Zoom in={trigger}>
                <div
                    role={'presentation'}
                    className={styles.anchorButton}
                    onClick={(e) => handleClick(e.target.ownerDocument)}
                >
                    {children}
                </div>
            </Zoom>
        </Fragment>
    );
};

export default ScrollTop;
