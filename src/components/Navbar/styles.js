//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLOR from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            background: {
                height: '60px',
                backgroundColor: COLOR.SECONDARY,
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
