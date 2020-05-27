//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            background: {
                width: '100%',
                height: '400px',
                backgroundColor: COLOR.LIGHT_GRAY,
            },
        })
    );

    return styles();
};

export default useStyles;
