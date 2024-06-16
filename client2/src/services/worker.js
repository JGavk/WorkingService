import axios from 'axios';

import { getEnvVariables } from '../utils/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

export const postWorker = async (data) => {
    try {
        const response = await axios.post(`${VITE_API_URL}/worker/register`, data); 
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
export const getWorkers = async () =>{
    try {
        const response = await axios.get(`${VITE_API_URL}/workers`); 
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
export const getLabour = async () => {
    try {
        const response = await axios.get(`${VITE_API_URL}/labour`); 
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}