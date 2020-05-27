//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { COLOR } from './../../library/color';
import { ALIGN } from './../../library/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            backgroundImage: {
                width: '100%',
                height: '940px',
                ...ALIGN.ALIGN_CENTER,
            },
            background: {
                color: COLOR.WHITE,
                zIndex: '99',
                top: '120px',
                // left: '40px',
                maxWidth: '600px',
                minHeight: '550px',
                position: 'absolute',
                backgroundColor: COLOR.SECONDARY,
            },
        })
    );

    return styles();
};

export default useStyles;
