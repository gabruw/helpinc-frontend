//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLORS from '../../library/colors';

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
            hammer: {
                zIndex: 99,
                width: '35px',
                height: '35px',
                marginTop: '12px',
                marginLeft: '10px',
                position: 'absolute',
            },
            blueRectangleRotate: {
                transform: 'rotate(360deg)',
            },
            grayRectangleRotate: {
                transform: 'rotate(-315deg)',
            },
            grayRectangleDefaultRotate: {
                transform: 'rotate(45deg)',
            },
            grayRectangle: { ...rectangle, ...rectangleTransition, ...{ backgroundColor: COLORS.SECONDARY } },
            blueRectangle: { ...rectangle, ...rectangleTransition, ...{ backgroundColor: COLORS.PRIMARY } },
        })
    );

    return styles();
};

export default useStyles;
