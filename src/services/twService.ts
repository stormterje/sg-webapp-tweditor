import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { Storm } from '../models/storm';
import { Advisory } from '../models/advisory';
import { Basin } from '../models/basin';
import { StormClassification } from '../models/stormClassification';
import { Confidence } from '../models/confidence';

const BASE_URL = 'https://localhost:7091/api';

const client = axios.create({
    baseURL: BASE_URL,
});

const config: AxiosRequestConfig = {
    headers: {
        'Accept': 'application/vnd.github+json',
    } as RawAxiosRequestHeaders,
};

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class TWService {
    async getStorms(): Promise<Storm[]> {
        await delay(5000);
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
        await delay(5000);
        const response: AxiosResponse = await client.get(`/resource/basins`, config);
        if (response.status === 200) {
            return response.data as Basin[];
        }
        return [];
    }

    async getStormClassifications(): Promise<StormClassification[]> {
        await delay(5000);
        const response: AxiosResponse = await client.get(`/resource/storm-classification`, config);
        if (response.status === 200) {
            return response.data as StormClassification[];
        }
        return [];
    }

    async getConfidences(): Promise<Confidence[]> {
        const response: AxiosResponse = await client.get(`/resource/confidences`, config);
        if (response.status === 200) {
            return response.data as Confidence[];
        }
        return [];
    }
}