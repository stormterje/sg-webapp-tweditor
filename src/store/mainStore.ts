import { create } from "zustand";
import { TWService } from "../services/twService";
import { Storm } from "../models/storm";
import { Advisory } from "../models/advisory";
import { Basin } from "../models/basin";

const twService: TWService = new TWService();

interface AppState {
    appTitle: string | null | undefined;
    errorMessage: string | null;
    basins: Basin[];
    stormBrowserVisible: boolean;
    storms: Storm[];
    isStormsLoading: boolean;
    selectedStormId: number | null;
    advisories: Advisory[];
    selectedAdvisoryId: number | null;
    isAdvisoriesLoading: boolean;

    setAppTitle: (s: string) => void;
    clearAppTitle: () => void;
    setStormBrowserVisible: (v: boolean) => void;
    setSelectedStormId: (id: number) => void;
    setSelectedAdvisoryId: (id: number | null) => void;
    loadBasins: () => void;
    loadStorms: () => void;
    loadAdvisories: (id: number) => void;
}

const initialState = {
    appTitle: null,
    count: 0,
    errorMessage: null,
    stormBrowserVisible: false,
    selectedStormId: null,
    isStormsLoading: false,
    isAdvisoriesLoading: false,
    selectedAdvisoryId: null,
    basins: [],
    storms: [],
    advisories: [],
};

export const useAppState = create<AppState>((set) => ({
    ...initialState,

    setAppTitle: (s: string) => set(() => ({ appTitle: s })),
    clearAppTitle: () => set(() => ({ appTitle: null })),
    setStorms: (s: Storm[]) => set(() => ({ storms: s })),
    setStormBrowserVisible: (v: boolean) => set(() => ({ stormBrowserVisible: v })),
    setSelectedStormId: (id: number) => {
        set(() => ({ selectedStormId: id }));
    },
    setSelectedAdvisoryId: (id: number | null) => {
        set(() => ({ selectedAdvisoryId: id }));
    },
    loadBasins: async () => {
        try {
            let basins = await twService.getBasins();
            set({ basins: basins });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
    },
    loadStorms: async () => {
        set({ errorMessage: null });
        set({ isStormsLoading: true });
        try {
            let storms = await twService.getStorms();
            set({ storms: storms });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ isStormsLoading: false });
    },
    loadAdvisories: async (id: number) => {
        set({ errorMessage: null });
        set({ isAdvisoriesLoading: true });
        try {
            let advisories = await twService.getAdvisories(id);
            set({ advisories: advisories });
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ isAdvisoriesLoading: false });
    },
}));