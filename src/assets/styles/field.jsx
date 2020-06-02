//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import FIELD from '../../assets/css/field';

//#endregion

export const fieldDefaultStyles = (borderColor) => {
    const styles = makeStyles(() =>
        createStyles({
            label: FIELD.LABEL,
            field: {
                border: '3px solid',
                borderColor: borderColor,
                ...FIELD.FULL_WIDTH_INPUT,
            },
            notchedOutline: {
                borderWidth: '1px',
                borderColor: 'transparent !important',
            },
        })
    );

    return styles();
};

export const getClasses = () => {
    const styles = fieldDefaultStyles();
    const classes = {
        classes: {
            notchedOutline: styles.notchedOutline,
        },
    };

    return classes;
};

export default fieldDefaultStyles;
