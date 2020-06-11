//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
// import { COLOR, SHADOW } from '../../library/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            root: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
        })
    );

    return styles();
};

export default useStyles;
