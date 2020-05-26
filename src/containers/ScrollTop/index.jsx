//#region Imports

import React, { Fragment } from 'react';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import useStyles from './styles';

//#endregion

const ScrollTop = ({ anchorReference }) => {
    const styles = useStyles();

    const trigger = useScrollTrigger({
        threshold: 100,
        disableHysteresis: true,
    });

    const scrollToTop = () => {
        anchorReference.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    return (
        <Fragment>
            <Zoom in={trigger}>
                <div className={styles.anchorButton} role={'presentation'} onClick={() => scrollToTop()}>
                    <Fab className={styles.floatButton} size={'small'}>
                        <KeyboardArrowUpIcon />
                    </Fab>
                </div>
            </Zoom>
        </Fragment>
    );
};

export default ScrollTop;
