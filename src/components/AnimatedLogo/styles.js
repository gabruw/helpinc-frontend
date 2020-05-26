//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from '../../library/color';
import FONTS from '../../assets/fonts/fonts';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            name: {
                fontSize: '25px',
                color: COLOR.WHITE,
                position: 'absolute',
                textTransform: 'uppercase',
                marginTop: theme.spacing(1),
                marginLeft: theme.spacing(7),
                ...FONTS.HelveticaNeueLTPro75,
            },
        })
    );

    return styles();
};

export default useStyles;
