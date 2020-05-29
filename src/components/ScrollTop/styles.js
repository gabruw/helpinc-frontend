//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLOR, SHADOW } from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            anchorButton: {
                position: 'fixed',
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            floatButton: {
                color: COLOR.WHITE,
                backgroundColor: COLOR.PRIMARY,
                '&:hover': {
                    backgroundColor: SHADOW.PRIMARY,
                },
            },
        })
    );

    return styles();
};

export default useStyles;
