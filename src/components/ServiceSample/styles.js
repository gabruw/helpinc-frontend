//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from '../../library/color';
import ALIGN from '../../assets/css/align';
import FONTS from '../../assets/fonts/fonts';

import Background from '../../assets/images/gray-home-background.jpg';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            backgroundImage: {
                width: '100%',
                height: '940px',
                ...ALIGN.ALIGN_CENTER,
                ...ALIGN.IMAGE_CENTER(Background),
            },
            background: {
                padding: '40px',
                minHeight: '550px',
                backgroundColor: COLOR.SECONDARY,
            },
            text: {
                fontSize: '60px',
                color: COLOR.WHITE,
                ...FONTS.HelveticaNeueLTProLT,
            },
            underlineText: {
                color: COLOR.PRIMARY,
                textDecoration: 'underline',
            },
        })
    );

    return styles();
};

export default useStyles;
