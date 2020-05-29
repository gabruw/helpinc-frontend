//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import FIELD from '../../assets/css/field';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            label: FIELD.LABEL,
            field: FIELD.FULL_WIDTH_INPUT,
        })
    );

    return styles();
};

export default useStyles;
