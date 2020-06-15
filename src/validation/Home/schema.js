//#region Imports

import appYup from '../generical';

//#endregion

export const ServiceSampleSchema = appYup.object().shape({
    // firstName: appYup.string().required().min(10).max(255),
    // teste: appYup.string().required().email().min(10).max(255),
});

export default ServiceSampleSchema;
