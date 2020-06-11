//#region Imports

import React, { Fragment } from 'react';

import InputLabel from '@material-ui/core/InputLabel';

import StyledInput from './StyledInput';
import StyledSelect from './StyledSelect';

import COLOR from '../../library/color';
import useStyles from './styles';

//#endregion

const Field = ({
    onBlur,
    onClick,
    onChange,
    name = '',
    label = '',
    items = [],
    type = 'text',
    disabled = false,
    variant = 'outlined',
    labelColor = COLOR.WHITE,
    borderColor = COLOR.PRIMARY,
}) => {
    const styles = useStyles(labelColor, borderColor);

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            {type === 'select' ? (
                <StyledSelect
                    name={name}
                    label={label}
                    styles={styles}
                    onBlur={onBlur}
                    variant={variant}
                    onClick={onClick}
                    disabled={disabled}
                    onChange={onChange}
                />
            ) : (
                <StyledInput
                    name={name}
                    label={label}
                    items={items}
                    styles={styles}
                    onBlur={onBlur}
                    variant={variant}
                    onClick={onClick}
                    disabled={disabled}
                    onChange={onChange}
                />
            )}
        </Fragment>
    );
};

export default Field;
