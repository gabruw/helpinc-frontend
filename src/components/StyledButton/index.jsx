//#region Imports

import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

//#endregion

const StyledButton = ({
    isPrimary = false,
    isSecondary = false,
    isContained = true,
    redirectTo = false,
    text = '',
    type = 'text',
}) => {
    const styles = useStyles();

    const buttonStyles = clsx({
        [styles.text]: true,
        [styles.primary]: isPrimary,
        [styles.secondary]: isSecondary,
    });

    const variant = isContained && 'contained';
    return (
        <Fragment>
            <Box>
                <Link to={redirectTo} className={styles.link}>
                    <Button type={type} className={buttonStyles} variant={variant}>
                        {text}
                    </Button>
                </Link>
            </Box>
        </Fragment>
    );
};

export default withRouter(StyledButton);
