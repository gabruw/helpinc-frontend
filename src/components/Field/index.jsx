//#region Imports

import clsx from 'clsx';
import React, { Fragment } from 'react';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';

import StyledInput from './StyledInput';
import StyledSelect from './StyledSelect';

import COLOR from '../../library/color';
import useStyles from './styles';

//#endregion

const Field = ({
    errors,
    onBlur,
    onClick,
    onChange,
    name = '',
    label = '',
    items = [],
    formConfig,
    type = 'text',
    disabled = false,
    variant = 'outlined',
    labelColor = COLOR.WHITE,
    borderColor = COLOR.PRIMARY,
    ...inputProps
}) => {
    const styles = useStyles(labelColor, borderColor);

    const error = errors && errors[name] && errors[name].message;
    const inputLabel = clsx(styles.label, { [styles.labelError]: error });

    return (
        <Fragment>
            <InputLabel className={inputLabel} htmlFor={styles.field}>
                {label}
            </InputLabel>

            {type === 'select' ? (
                <StyledSelect
                    name={name}
                    label={label}
                    items={items}
                    styles={styles}
                    onBlur={onBlur}
                    onClick={onClick}
                    variant={variant}
                    onChange={onChange}
                    disabled={disabled}
                    error={Boolean(error)}
                    formConfig={formConfig}
                    {...inputProps}
                />
            ) : (
                <StyledInput
                    name={name}
                    type={type}
                    label={label}
                    styles={styles}
                    onBlur={onBlur}
                    variant={variant}
                    onClick={onClick}
                    onChange={onChange}
                    disabled={disabled}
                    error={Boolean(error)}
                    formConfig={formConfig}
                    {...inputProps}
                />
            )}

            {error && <Box className={styles.error}>{error}</Box>}
        </Fragment>
    );
};

export default Field;
