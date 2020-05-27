//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from './../../library/color';
import FONTS from './../../assets/fonts/fonts';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() => createStyles({}));

    return styles();
};

export default useStyles;
