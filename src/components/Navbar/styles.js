//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLOR from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            backgroundHeight: {
                height: '60px',
            },
            background: {
                transition: 'box-shadow 1s ease, background-color 1s ease',
                backgroundColor: COLOR.SECONDARY,
            },
            backgroundTransparent: {
                boxShadow: 'none',
                transition: 'background-color 1s ease',
                backgroundColor: 'transparent',
            },
            animatedLogoAlign: {
                marginLeft: theme.spacing(3),
                marginBottom: theme.spacing(6),
            },
            spacingBetweenButton: {
                marginRight: theme.spacing(2),
            },
        })
    );

    return styles();
};

export default useStyles;
