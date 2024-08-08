export interface Advisory {
    advisoryId: number;
    parentAdvisoryId: number;
    trackId: number;
    geographicReference: string;
    trendId: number;
    confidenceId: number;
    probabilityStormWithin48h: number;
    probabilityStormAfter48h: number;
    probabilityHurricaneWithin48h: number;
    probabilityHurricaneAfter48h: number;
    initialPressure: number;
    stormName: string;
    basinId: number;
}