//#region Imports

import axios from 'axios';
import ENDPOINT from '../library/endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINT.BASE_URL,
});

export default API;
