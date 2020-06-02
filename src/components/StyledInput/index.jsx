//#region Imports

import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import COLOR from '../../library/color';
import { fieldDefaultStyles, getClasses } from '../../assets/styles/field';

//#endregion

const StyledInput = ({ label = '', name = '', variant = 'outlined', borderColor = COLOR.PRIMARY }) => {
    const styles = fieldDefaultStyles(borderColor);

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <TextField
                className={styles.field}
                name={name}
                size={'small'}
                variant={variant}
                placeholder={label}
                InputProps={getClasses()}
            />
        </Fragment>
    );
};

export default StyledInput;
