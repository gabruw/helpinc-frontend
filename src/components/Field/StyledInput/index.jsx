//#region Imports

import React, { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import { useClasses } from '../styles';

//#endregion

const StyledInput = ({
    name,
    type,
    label,
    error,
    onBlur,
    styles,
    onClick,
    variant,
    disabled,
    onChange,
    formConfig,
    ...inputProps
}) => {
    const classes = useClasses();

    return (
        <Fragment>
            <TextField
                className={clsx(styles.field, {
                    [styles.fieldError]: error,
                })}
                type={type}
                name={name}
                error={error}
                size={'small'}
                variant={variant}
                disabled={disabled}
                placeholder={label}
                InputProps={classes}
                inputRef={formConfig}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
                {...inputProps}
            />
        </Fragment>
    );
};

export default StyledInput;
