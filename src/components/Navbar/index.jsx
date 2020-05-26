//#region Imports

import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import AnimatedLogo from '../AnimatedLogo/index';
import Anchor from './../../containers/Anchor/index';
import ScrollTop from '../../containers/ScrollTop/index';
import StyledButton from '../../components/StyledButton/index';

import PATH from './../../library/path';
import useStyles from './styles';

//#endregion

const Navbar = ({ haveSideBar = false }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <AppBar className={styles.background}>
                <Toolbar>
                    {haveSideBar && (
                        <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <AnimatedLogo logoAlign={styles.animatedLogoAlign} />

                    <div className={styles.spacingBetweenButton}>
                        <StyledButton isPrimary redirectTo={PATH.AUTHENTICATION} text={'Registrar'} />
                    </div>
                    <StyledButton isPrimary redirectTo={PATH.AUTHENTICATION} text={'Entrar'} />
                </Toolbar>
            </AppBar>

            <Anchor id={'back-to-top'} />
            <ScrollTop />
        </Fragment>
    );
};

export default Navbar;
