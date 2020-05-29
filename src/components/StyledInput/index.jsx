//#region Imports

import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './styles';

//#endregion

const StyledInput = ({ label = '', variant = 'outlined' }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <TextField className={styles.field} label={label} variant={variant} size={'small'} />
        </Fragment>
    );
};

export default StyledInput;
