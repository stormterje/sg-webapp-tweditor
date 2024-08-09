import { create } from "zustand";
import { TWService } from "../services/twService";
import { Storm } from "../models/storm";
import { Advisory } from "../models/advisory";
import { TrackPoint } from "../models/trackPoint";

const twService: TWService = new TWService();

interface AppState {
    appTitle: string | null | undefined;
    errorMessage: string | null;
    stormBrowserVisible: boolean;
    storms: Storm[];
    isStormsLoading: boolean;
    selectedStormId: number | null;
    advisories: Advisory[];
    selectedAdvisoryId: number | null;
    isAdvisoriesLoading: boolean;
    advisory: Advisory | null;
    isAdvisoryLoading: boolean;
    trackPoints: TrackPoint[];

    setAppTitle: (s: string) => void;
    clearAppTitle: () => void;
    setStormBrowserVisible: (v: boolean) => void;
    setSelectedStormId: (id: number) => void;
    setSelectedAdvisoryId: (id: number | null) => void;
    setAdvisory: (advisory: Advisory | null) => void;
    loadStorms: () => void;
    loadAdvisories: (stormId: number) => void;
    loadAdvisory: (advisoryId: number) => void;
    setTrackPoints: (tps: TrackPoint[]) => void;
}

const initialTracpPoints: TrackPoint[] = [];

const initialState = {
    appTitle: null,
    count: 0,
    errorMessage: null,
    stormBrowserVisible: true,
    selectedStormId: null,
    isStormsLoading: false,
    isAdvisoriesLoading: false,
    selectedAdvisoryId: null,
    storms: [],
    advisories: [],
    trackPoints: initialTracpPoints,
    advisory: null,
    isAdvisoryLoading: false,
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
    setAdvisory: (advisory: Advisory | null) => {
        set(() => ({ advisory: advisory }));
    },
    setTrackPoints: (tps: TrackPoint[]) => {
        set(() => ({ trackPoints: tps }));
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

    loadAdvisory: async (advisoryId: number) => {
        set({ errorMessage: null });
        set({ isAdvisoryLoading: true });
        try {
            let adv = await twService.getAdvisory(advisoryId);
            set({ advisory: adv });
            if (adv) {
                var tps = await twService.getTrackPoints(adv.trackId);
                set({ trackPoints: tps });
            }
        } catch (err: any) {
            set({ errorMessage: err.message });
        }
        set({ isAdvisoryLoading: false });
    },
}));