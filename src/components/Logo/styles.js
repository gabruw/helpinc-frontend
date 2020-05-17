//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLOR from '../../library/colors';

//#endregion

export const useStyles = () => {
    const rectangle = {
        width: '50px',
        height: '50px',
        marginTop: '5px',
        position: 'absolute',
        border: '1px solid #ffffff',
    };

    const rectangleTransition = {
        transition: 'transform 2s ease-in-out',
    };

    const styles = makeStyles(() =>
        createStyles({
            blueRectangleRotate: {
                transform: rotate('360deg'),
            },
            grayRectangleRotate: {
                transform: rotate('-315deg'),
            },
            grayRectangleDefaultRotate: {
                transform: rotate('45deg'),
            },
            blueRectangle: Object.assign(rectangle, rectangleTransition, { backgroundColor: COLORS.PRIMARY }),
            grayRectangle: Object.assign(rectangle, rectangleTransition, { backgroundColor: COLORS.SECONDARY }),
            hammer: {
                zIndex: 99,
                width: '35px',
                height: '35px',
                marginTop: '12px',
                marginLeft: '10px',
                position: 'absolute',
            },
        })
    );

    return styles();
};

export default useStyles;
