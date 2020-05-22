//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import COLOR from '../../library/color';
import FONTS from '../../assets/fonts/fonts';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            name: {
                ...FONTS.HelveticaNeueLTPro75,
                ...{
                    color: COLOR.WHITE,
                    fontSize: '25px',
                    marginTop: '10px',
                    marginLeft: '55px',
                    position: 'absolute',
                    textTransform: 'uppercase',
                },
            },
        })
    );

    return styles();
};

export default useStyles;
