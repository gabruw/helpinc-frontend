//#region Imports

import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { debounce } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import Logo from '../../components/Logo/index';

import PATH from '../../library/path';
import useStyles from './styles';

//#endregion

const AnimatedLogo = ({ logoAlign }) => {
    const styles = useStyles(logoAlign);

    const [rotate, setRotate] = useState(false);
    const delayedRotateState = debounce(() => setRotate(!rotate), 2000);

    const onHover = () => {
        delayedRotateState();
    };

    const duration = { enter: 4000, exit: 3000 };
    return (
        <Fragment>
            <Grid container>
                <Grid item className={logoAlign}>
                    <Link to={PATH.HOME}>
                        <div onMouseOut={() => onHover()}>
                            <Logo canRotate={rotate} />
                        </div>
                    </Link>

                    <Fade direction={'up'} in={rotate} timeout={duration}>
                        <span className={styles.name}>help inc.</span>
                    </Fade>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default withRouter(AnimatedLogo);
