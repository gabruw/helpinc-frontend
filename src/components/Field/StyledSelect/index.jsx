//#region Imports

import clsx from 'clsx';
import React, { Fragment } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { useClasses } from '../styles';

//#endregion

const StyledSelect = ({
    name,
    label,
    items,
    error,
    styles,
    onBlur,
    onClick,
    variant,
    disabled,
    onChange,
    formConfig,
    ...inputProps
}) => {
    const classes = useClasses();
    const haveItems = items && items.length > 0;

    return (
        <Fragment>
            <Autocomplete
                className={clsx(styles.field, {
                    [styles.fieldError]: error,
                })}
                name={name}
                size={'small'}
                options={items}
                formConfig={formConfig}
                disabled={!haveItems || disabled}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
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
                {...inputProps}
            />
        </Fragment>
    );
};

export default StyledSelect;
