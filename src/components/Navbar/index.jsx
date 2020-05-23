//#region Imports

import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import AnimatedLogo from '../AnimatedLogo/index';
import Anchor from './../../containers/Anchor/index';
import ScrollTop from '../../containers/ScrollTop/index';

import useStyles from './styles';

//#endregion

const Navbar = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <AppBar className={styles.background}>
                <Toolbar>
                    <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
                        <MenuIcon />
                    </IconButton>

                    <AnimatedLogo logoAlign={styles.animatedLogoAlign} />
                </Toolbar>
            </AppBar>

            <Anchor id={'back-to-top'} />
            <ScrollTop />
        </Fragment>
    );
};

export default Navbar;
