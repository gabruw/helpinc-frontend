//#region Imports

import COLOR from '../../library/color';
import FONTS from '../../assets/fonts/fonts';

//#endregion

export const FIELD = {
    FULL_WIDTH_INPUT: {
        width: '100%',
        height: '40px',
        color: COLOR.SECONDARY,
        backgroundColor: COLOR.LIGHT_GRAY,
    },
    LABEL: {
        color: COLOR.WHITE,
        ...FONTS.HelveticaNeueLTProMD,
    },
};

export default FIELD;
