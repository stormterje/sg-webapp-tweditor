import { create } from "zustand";

interface WizardState {
    maxPages: number;
    selectedSubPages: number[];
    currentPage: number;
    setPage: (p: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setSelectedSubPages: (sp: number[]) => void;
}

const initialState = {
    currentPage: 1,
    maxPages: 3,
    selectedSubPages: [1, 1, 1],
};


export const useWizardState = create<WizardState>((set) => ({
    ...initialState,

    setPage: (p: number) => set(() => ({ currentPage: p })),
    nextPage: () => set((state) => ({ currentPage: state.currentPage + (state.currentPage < state.maxPages ? 1 : 0) })),
    previousPage: () => set((state) => ({ currentPage: state.currentPage - (state.currentPage > 1 ? 1 : 0) })),
    setSelectedSubPages: (sp: number[]) => {
        set({ selectedSubPages: sp });
    },

}));

