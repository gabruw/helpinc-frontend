//#region Imports

import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';

import SkillFrame from '../SkillFrame/index';
import StyledInput from '../StyledInput/index';
import StyledSelect from '../StyledSelect/index';
import StyledButton from '../StyledButton/index';
import StyledRating from '../StyledRating/index';

import LABEL from '../../library/label';
import NAME from './../../library/name';

import useStyles from './styles';

//#endregion

const FormServiceSample = () => {
    const styles = useStyles();

    const { NAME_SKILL, NAME_SKILL_LEVEL, NAME_CEP } = NAME;
    const { LABEL_SKILL_TYPE, LABEL_SKILL, LABEL_SKILL_LEVEL, LABEL_CEP } = LABEL;

    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <Fragment>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SkillFrame label={LABEL_SKILL_TYPE} />
                    </Grid>

                    <Grid item xl={6} xs={12}>
                        <StyledSelect label={LABEL_SKILL} name={NAME_SKILL} />
                    </Grid>

                    <Grid item xl={6} xs={12}>
                        <StyledRating label={LABEL_SKILL_LEVEL} name={NAME_SKILL_LEVEL} />
                    </Grid>

                    <Grid item xl={6} xs={12}>
                        <StyledInput label={LABEL_CEP} name={NAME_CEP} />
                    </Grid>

                    <Grid className={styles.buttonAlign} item xs={12}>
                        <StyledButton isPrimary type='submit' text='Buscar' />
                    </Grid>
                </Grid>
            </form>
        </Fragment>
    );
};

export default FormServiceSample;
