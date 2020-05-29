//#region Imports

import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import StyledInput from '../StyledInput/index';
import StyledSelect from '../StyledSelect/index';
import StyledButton from '../StyledButton/index';

import LABEL from '../../library/label';
import useStyles from './styles';

//#endregion

const FormServiceSample = () => {
    const styles = useStyles();

    const { LABEL_SKILL, LABEL_CEP } = LABEL;
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <Fragment>
            <form>
                <Grid container>
                    <Grid item xs={12}></Grid>
                    <Grid item xl={6} xs={12}>
                        <StyledSelect label={LABEL_SKILL} />
                    </Grid>
                    <Grid item xl={6} xs={12}></Grid>
                    <Grid item xl={6} xs={12}>
                        <StyledInput label={LABEL_CEP} />
                    </Grid>

                    <Grid item xs={12}>
                        <StyledButton isPrimary type='submit' text='Buscar' />
                    </Grid>
                </Grid>
            </form>
        </Fragment>
    );
};

export default FormServiceSample;
