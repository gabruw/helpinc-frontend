//#region Imports

import * as yup from 'yup';

//#endregion

yup.setLocale({
    mixed: { required: 'O campo é obrigatório' },
    string: {
        max: 'Caracteres minimos: ${min}',
        min: 'Caracteres maximos: ${min}',
    },
});

export default yup;
