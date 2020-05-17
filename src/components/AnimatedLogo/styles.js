//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from '../../library/colors';
import FONTS from './../../assets/fonts/font';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            name: {
                fontSize: '30px',
                marginTop: '21px',
                marginLeft: '65px',
                position: 'absolute',
                color: COLOR.SECONDARY,
                textTransform: 'uppercase',
                fontFamily: FONTS.HelveticaNeueLTPro75,
            },
            logo: {
                width: '400px',
                height: '120px',
            },
        })
    );

    return styles();
};

export default useStyles;
