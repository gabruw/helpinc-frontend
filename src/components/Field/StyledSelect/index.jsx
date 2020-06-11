//#region Imports

import React, { Fragment } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { useClasses } from '../styles';

//#endregion

const StyledSelect = ({ name, label, items, styles, onBlur, variant, onClick, disabled, onChange }) => {
    const classes = useClasses();
    const haveItems = items && items.length > 0;

    return (
        <Fragment>
            <Autocomplete
                className={styles.field}
                name={name}
                size={'small'}
                options={items}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
                disabled={!haveItems || disabled}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            ...classes,
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
