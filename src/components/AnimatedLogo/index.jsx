//#region Imports

import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { debounce } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import Logo from '../Logo/index';
import useStyles from './styles';

//#endregion

const AnimatedLogo = () => {
    const styles = useStyles();

    const [rotate, setRotate] = useState(false);
    const delayedRotateState = debounce(() => setRotate(!rotate), 2000);

    const onHover = () => {
        delayedRotateState();
    };

    const duration = { enter: 4000, exit: 3000 };
    return (
        <Fragment>
            <Grid container style={{ height: '100px' }}>
                <Grid item className={styles.logo} style={{ height: '90px', marginTop: '5px', marginLeft: '20px' }}>
                    <Link to='/home'>
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
