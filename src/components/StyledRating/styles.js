//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from './../../library/color';
import FIELD from '../../assets/css/field';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            label: FIELD.LABEL,
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
