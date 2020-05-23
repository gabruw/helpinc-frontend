//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLOR from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            background: {
                height: '60px',
                backgroundColor: COLOR.SECONDARY,
            },
            animatedLogoAlign: {
                marginLeft: '20px',
                marginBottom: '48px',
            },
        })
    );

    return styles();
};

export default useStyles;
