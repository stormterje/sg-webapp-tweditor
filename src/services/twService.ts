import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { Storm } from '../models/storm';
import { Advisory } from '../models/advisory';
import { Basin } from '../models/basin';
import { StormClassification } from '../models/stormClassification';
import { Confidence } from '../models/confidence';
import { Trend } from '../models/trend';
import { ITrackPoint, TrackPoint } from '../models/trackPoint';
import { Parameter } from '../models/parameter';

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

    async getStormClassifications(): Promise<StormClassification[]> {
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

    async getTrends(): Promise<Trend[]> {
        const response: AxiosResponse = await client.get(`/resource/trends`, config);
        if (response.status === 200) {
            return response.data as Trend[];
        }
        return [];
    }

    async getParameters(): Promise<Parameter[]> {
        const response: AxiosResponse = await client.get(`/parameters`, config);
        if (response.status === 200) {
            return response.data as Parameter[];
        }
        return [];
    }

    async getTrackPoints(trackId: number): Promise<TrackPoint[]> {
        const response: AxiosResponse = await client.get(`/track/${trackId}/trackpoints`, config);
        if (response.status === 200) {
            var ret = response.data as ITrackPoint[];
            return ret.map(tp => new TrackPoint(tp));
        }
        return [];
    }


    async updateAdvisory(advisory: Advisory): Promise<void> {
        try {
            console.log(`Gong to save advisory\n${JSON.stringify(advisory, null, '  ')}`);
            const response: AxiosResponse = await client.put(`/advisory/${advisory.advisoryId}`, advisory, config);
            console.log(JSON.stringify(response));
        }
        catch (e) {
            console.log(e);
        }
    }

    async getAdvisory(id: number): Promise<Advisory | null> {
        const response: AxiosResponse = await client.get(`/advisory/${id}`, config);
        if (response.status === 200) {
            return response.data as Advisory;
        }
        return null;
    }

}