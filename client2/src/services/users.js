import axios from 'axios';

import { getEnvVariables } from '../utils/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

export const postUsers = async (data) => {
    try {
        const response = await axios.post(`${VITE_API_URL}/register`, data); 
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

