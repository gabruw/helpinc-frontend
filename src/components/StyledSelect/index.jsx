//#region Imports

import React, { Fragment, useState } from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './styles';

//#endregion

const StyledSelect = ({ label = '', items = [], disabled = false }) => {
    const styles = useStyles();

    const [habilidade, setHabilidade] = useState('');

    const handleChange = (value) => {
        setHabilidade(value);
    };

    const haveItems = items && items.length > 0;
    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <Select
                className={styles.field}
                label={label}
                value={habilidade}
                onChange={handleChange}
                disabled={!haveItems || disabled}
            >
                <MenuItem value=''>Vazio</MenuItem>
                {haveItems && items.map((item) => <MenuItem value={item.value}>{item.text}</MenuItem>)}
            </Select>
        </Fragment>
    );
};

export default StyledSelect;
