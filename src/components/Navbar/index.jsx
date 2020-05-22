//#region Imports

import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ScrollTop from '../../containers/ScrollTop/index';
import AnimatedLogo from '../AnimatedLogo/index';

import useStyles from './styles';

//#endregion

const Navbar = (props) => {
    const styles = useStyles();

    return (
        <Fragment>
            <AppBar className={styles.background} position={'static'}>
                <Toolbar>
                    <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
                        <MenuIcon />
                    </IconButton>

                    <AnimatedLogo logoAlign={styles.animatedLogoAlign} />

                    {/* <Button variant='contained' color={'primary'}>
                        Entrar
                    </Button>
                    <Button variant='contained' color={'primary'}>
                        Login
                    </Button> */}
                </Toolbar>
            </AppBar>

            <Toolbar id={'back-to-top-anchor'} />

            <ScrollTop {...props}>
                <Fab className={styles.floatButton} size={'small'}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Fragment>
    );
};

export default withRouter(Navbar);
