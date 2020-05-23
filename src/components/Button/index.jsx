//#region Imports

import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import useStyles from './styles';

//#endregion

const Button = (props) => {
    const styles = useStyles();

    return (
        <Fragment>
            <Button variant='contained' color={'primary'}>
                Login
            </Button>
        </Fragment>
    );
};

export default withRouter(Button);
