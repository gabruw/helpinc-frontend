export const ALIGN = {
    ALIGN_LEFT: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ALIGN_CENTER: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ALIGN_RIGHT: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    IMAGE_CENTER: (image) => ({
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${image})`,
    }),
};

export default ALIGN;
