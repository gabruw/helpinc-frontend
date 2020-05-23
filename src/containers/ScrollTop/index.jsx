//#region Imports

import React, { Fragment } from 'react';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import useStyles from './styles';

//#endregion

const ScrollTop = () => {
    const styles = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (document) => {
        const anchor = document.querySelector('#back-to-top');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <Fragment>
            <Zoom in={trigger}>
                <div
                    role={'presentation'}
                    className={styles.anchorButton}
                    onClick={(e) => handleClick(e.target.ownerDocument)}
                >
                    <Fab className={styles.floatButton} size={'small'}>
                        <KeyboardArrowUpIcon />
                    </Fab>
                </div>
            </Zoom>
        </Fragment>
    );
};

export default ScrollTop;
