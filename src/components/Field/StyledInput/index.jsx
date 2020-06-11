//#region Imports

import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import { useClasses } from '../styles';

//#endregion

const StyledInput = ({ name, label, styles, onBlur, variant, onClick, disabled, onChange }) => {
    const classes = useClasses();

    return (
        <Fragment>
            <TextField
                className={styles.field}
                name={name}
                size={'small'}
                variant={variant}
                disabled={disabled}
                placeholder={label}
                InputProps={classes}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
            />
        </Fragment>
    );
};

export default StyledInput;
