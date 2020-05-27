//#region Imports

import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import StyledButton from '../../components/StyledButton/index';

import LABEL from './../../library/label';
import useStyles from './styles';

//#endregion

const FormServiceSample = () => {
    const styles = useStyles();

    const { LABEL_SKILL } = LABEL;

    const [habilidade, setHabilidade] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();

    const handleChange = (value) => {
        setHabilidade(value);
    };

    return (
        <Fragment>
            <FormControl></FormControl>

            <FormControl>
                <StyledButton isPrimary type='submit' text='Buscar' />
            </FormControl>
        </Fragment>
    );
};

export default FormServiceSample;
