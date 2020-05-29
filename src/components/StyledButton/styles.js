//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import FONTS from '../../assets/fonts/fonts';
import { COLOR, SHADOW } from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            link: {
                textDecoration: 'none',
            },
            text: {
                ...FONTS.HelveticaNeueLTProMD,
                color: COLOR.WHITE,
            },
            primary: {
                backgroundColor: COLOR.PRIMARY,
                '&:hover': {
                    backgroundColor: SHADOW.PRIMARY,
                },
            },
            secondary: {
                backgroundColor: COLOR.SECONDARY,
                '&:hover': {
                    backgroundColor: SHADOW.SECONDARY,
                },
            },
        })
    );

    return styles();
};

export default useStyles;
