import axios from 'axios';
import { config } from '../../config/config';

const SECRET_KEY = config.SEERBIT.SECRET;
const baseURL = config.SEERBIT.BASE_URL;

export const client = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${SECRET_KEY}`}
});
