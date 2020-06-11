//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from '../../library/color';
import LABEL_STYLES from '../../assets/css/label';

//#endregion

export const useStyles = (labelColor) => {
    const label = LABEL_STYLES(labelColor);

    const styles = makeStyles(() =>
        createStyles({
            label: label,
            field: {
                marginTop: '5px',
                color: '#FFE623',
                '&:hover': {
                    color: '#FFE623',
                },
            },
            icon: {
                color: COLOR.LIGHT_GRAY,
            },
        })
    );

    return styles();
};

export default useStyles;
