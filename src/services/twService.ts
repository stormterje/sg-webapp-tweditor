import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { Storm } from '../models/storm';
import { Advisory } from '../models/advisory';
import { Basin } from '../models/basin';

const BASE_URL = 'https://localhost:7091/api';

const client = axios.create({
    baseURL: BASE_URL,
});
const config: AxiosRequestConfig = {
    headers: {
        'Accept': 'application/vnd.github+json',
    } as RawAxiosRequestHeaders,
};


export class TWService {
    async getStorms(): Promise<Storm[]> {
        const response: AxiosResponse = await client.get('/storm', config);
        if (response.status === 200) {
            return response.data as Storm[];
        }
        return [];
    }

    async getAdvisories(id: number): Promise<Advisory[]> {
        const response: AxiosResponse = await client.get(`/storm/${id}/advisory`, config);
        if (response.status === 200) {
            return response.data as Advisory[];
        }
        return [];
    }

    async getBasins(): Promise<Basin[]> {
        const response: AxiosResponse = await client.get(`/resource/basins`, config);
        if (response.status === 200) {
            return response.data as Basin[];
        }
        return [];
    }
}