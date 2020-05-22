//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            anchorButton: {
                position: 'fixed',
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
        })
    );

    return styles();
};

export default useStyles;
