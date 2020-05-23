//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import COLOR from '../../library/color';

//#endregion

export const useStyles = (rectangleSize, hammerSize, marginTop, marginLeft) => {
    const rectangle = {
        width: rectangleSize,
        height: rectangleSize,
        marginTop: '5px',
        position: 'absolute',
        border: `1px solid ${COLOR.WHITE}`,
    };

    const rectangleTransition = {
        transition: 'transform 2s ease-in-out',
    };

    const styles = makeStyles(() =>
        createStyles({
            hammer: {
                width: hammerSize,
                height: hammerSize,
                position: 'absolute',
                marginTop: marginTop,
                marginLeft: marginLeft,
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
            grayRectangle: { ...rectangle, ...rectangleTransition, ...{ backgroundColor: COLOR.SECONDARY } },
            blueRectangle: { ...rectangle, ...rectangleTransition, ...{ backgroundColor: COLOR.PRIMARY } },
        })
    );

    return styles();
};

export default useStyles;
