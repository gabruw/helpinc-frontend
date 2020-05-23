//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLOR, SHADOW } from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            background: {
                height: '60px',
                backgroundColor: COLOR.SECONDARY,
            },
        })
    );

    return styles();
};

export default useStyles;
