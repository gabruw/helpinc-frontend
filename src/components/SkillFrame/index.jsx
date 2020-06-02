//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import useStyles from './styles';
import { COLOR } from './../../library/color';

//#endregion

const SkillFrame = ({ label = '', color = COLOR.PRIMARY }) => {
    const styles = useStyles(color);

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <Grid container spacing={1}>
                {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((value, index) => (
                    <Grid key={index} item>
                        <StarBorderIcon className={styles.icon} fontSize='inherit' />
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
};

export default SkillFrame;
