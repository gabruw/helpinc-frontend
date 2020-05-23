//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            backgroundImage: { width: '100%', height: '1080px' },
        })
    );

    return styles();
};

export default useStyles;
