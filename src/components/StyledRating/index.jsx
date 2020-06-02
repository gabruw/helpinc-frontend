//#region Imports

import React, { Fragment } from 'react';

import Rating from '@material-ui/lab/Rating';
import InputLabel from '@material-ui/core/InputLabel';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import useStyles from './styles';

//#endregion

const StyledRating = ({ label = '', name = 'rating' }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
            <Rating
                className={styles.field}
                name={name}
                size={'large'}
                precision={1}
                defaultValue={0}
                emptyIcon={<StarBorderIcon className={styles.icon} fontSize='inherit' />}
            />
        </Fragment>
    );
};

export default StyledRating;
