import { create } from "zustand";
import { TWService } from "../services/twService";
import { Basin } from "../models/basin";
import { StormClassification } from "../models/stormClassification";
import { Confidence } from "../models/confidence";
import { Trend } from "../models/trend";
import { Parameter } from "../models/parameter";

const twService: TWService = new TWService();

interface Resources {
    basins: Map<number, Basin>;
    stormClassifications: Map<number, StormClassification>;
    trends: Map<number, Trend>;
    confidences: Map<number, Confidence>;
    parameters: Map<number, Parameter>;
    errorMessage: string;

    loadBasins: () => Promise<void>;
    basinsLoadingFinished: boolean;
    loadStormClassifications: () => Promise<void>;
    stormClassificationsLoadingFinished: boolean;
    loadTrends: () => Promise<void>;
    trendsLoadingFinished: boolean;
    loadConfidences: () => Promise<void>;
    condidencesLoadingFinished: boolean;
    loadParameters: () => Promise<void>;
    parametersLoadingFinished: boolean;
}

const initialState = {
    basins: new Map(),
    basinsLoadingFinished: false,
    stormClassifications: new Map(),
    stormClassificationsLoadingFinished: false,
    trends: new Map(),
    trendsLoadingFinished: false,
    confidences: new Map(),
    condidencesLoadingFinished: false,
    parameters: new Map(),
    parametersLoadingFinished: false,
    errorMessage: '',
};


export const useResources = create<Resources>((set) => ({
    ...initialState,

    loadBasins: async () => {
        set({ basinsLoadingFinished: false });
        try {
            let basins = await twService.getBasins();
            set({ basins: new Map(basins.map(b => [b.basinId, b])) });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ basinsLoadingFinished: true });
    },

    loadStormClassifications: async () => {
        set({ stormClassificationsLoadingFinished: false });
        try {
            let sc = await twService.getStormClassifications();
            set({ stormClassifications: new Map(sc.map(sc => [sc.stormClassificationId, sc])) });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ stormClassificationsLoadingFinished: true });
    },

    loadConfidences: async () => {
        set({ condidencesLoadingFinished: false });
        try {
            let confidences = await twService.getConfidences();
            set({ confidences: new Map(confidences.map(c => [c.confidenceId, c])) });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ condidencesLoadingFinished: true });
    },

    loadTrends: async () => {
        set({ trendsLoadingFinished: false });
        try {
            let trends = await twService.getTrends();
            set({ trends: new Map(trends.map(t => [t.trendId, t])) });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ trendsLoadingFinished: true });
    },

    loadParameters: async () => {
        set({ parametersLoadingFinished: false });
        try {
            let params = await twService.getParameters();
            set({ parameters: new Map(params.map(p => [p.parameterId, p])) });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ parametersLoadingFinished: true });
    },
}));

