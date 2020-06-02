//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ALIGN from '../../assets/css/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            buttonAlign: ALIGN.END,
        })
    );

    return styles();
};

export default useStyles;
