//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import LABEL_STYLES from '../../assets/css/label';

//#endregion

export const useStyles = (labelColor, color) => {
    const label = LABEL_STYLES(labelColor);

    const styles = makeStyles(() =>
        createStyles({
            label: label,
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
