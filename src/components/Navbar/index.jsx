//#region Imports

import React, { Fragment, useRef } from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import AnimatedLogo from '../AnimatedLogo/index';
import Anchor from './../../containers/Anchor/index';
import ScrollTop from '../../containers/ScrollTop/index';
import StyledButton from '../../components/StyledButton/index';

import PATH from './../../library/path';
import TEXT from './../../library/text';

import useStyles from './styles';

//#endregion

const Navbar = ({ haveSideBar = false }) => {
    const styles = useStyles();
    const anchorElement = useRef(null);

    const trigger = useScrollTrigger({
        threshold: 1,
        disableHysteresis: true,
    });

    const background = clsx({
        [styles.background]: trigger,
        [styles.backgroundHeight]: true,
        [styles.backgroundTransparent]: !trigger,
    });

    return (
        <Fragment>
            <AppBar className={background}>
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

            <Anchor id={TEXT.GENERICAL.ID_ANCHOR} getElement={anchorElement} />
            <ScrollTop anchorReference={anchorElement.current} />
        </Fragment>
    );
};

export default Navbar;
