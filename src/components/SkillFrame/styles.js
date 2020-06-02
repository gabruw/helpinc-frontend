//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import FIELD from '../../assets/css/field';

//#endregion

export const useStyles = (color) => {
    const styles = makeStyles(() =>
        createStyles({
            label: FIELD.LABEL,
            icon: {
                color: color,
                width: '40px',
                height: '40px',
                borderColor: color,
                border: '2px solid',
            },
        })
    );

    return styles();
};

export default useStyles;
