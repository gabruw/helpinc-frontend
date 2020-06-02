//#region Imports

import React, { Fragment } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import COLOR from '../../library/color';
import { fieldDefaultStyles, getClasses } from '../../assets/styles/field';

//#endregion

const StyledSelect = ({
    label = '',
    name = '',
    items = [],
    variant = 'outlined',
    disabled = false,
    borderColor = COLOR.PRIMARY,
}) => {
    const styles = fieldDefaultStyles(borderColor);
    const haveItems = items && items.length > 0;

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <Autocomplete
                className={styles.field}
                name={name}
                size={'small'}
                options={items}
                disabled={!haveItems || disabled}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            ...getClasses(),
                        }}
                        variant={variant}
                        placeholder={label}
                    />
                )}
            />
        </Fragment>
    );
};

export default StyledSelect;
