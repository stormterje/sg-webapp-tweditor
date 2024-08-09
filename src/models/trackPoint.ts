export interface ParameterValue {
    parameterId: number;
    trackPointId: number;
    value: string;
}

const getParamValues = (pval: ParameterValue[], start: number, count: number = 4): ParameterValue[] => {
    let ret = pval.filter(pv => pv.parameterId >= start && pv.parameterId < start + count);
    return ret;
}

const getSpecifiedPaaramValues = (pval: ParameterValue[], params: number[]): ParameterValue[] => {
    let ret = pval.filter(pv => params.includes(pv.parameterId));
    return ret;
}

export interface ITrackPoint {
    trackPointId: number;
    trackId: number;
    forecastHour: number;
    lat: number;
    lon: number;
    stormClassificationId: number | null;
    stormTypeId: number | null;
    createdAt: Date | null;
    validTime: Date | null;
    parameterValues: ParameterValue[];
}

export class TrackPoint implements ITrackPoint {
    constructor(i: ITrackPoint) {
        this.trackPointId = i.trackPointId;
        this.trackId = i.trackId;
        this.forecastHour = i.forecastHour;
        this.lat = i.lat;
        this.lon = i.lon;
        this.stormClassificationId = i.stormClassificationId;
        this.stormTypeId = i.stormTypeId;
        this.createdAt = i.createdAt;
        this.validTime = i.validTime;
        this.parameterValues = i.parameterValues;
    }
    public trackPointId: number = 0;
    public trackId: number = 0;
    public forecastHour: number = 0;
    public lat: number = 0;
    public lon: number = 0;
    public stormClassificationId: any;
    public stormTypeId: number | null = null;
    public createdAt: Date | null = null;
    public validTime: Date | null = null;
    public parameterValues: ParameterValue[] = [];
    public get maxWinds() {
        return getParamValues(this.parameterValues, 21);
    }
    public get maxGusts() {
        return getParamValues(this.parameterValues, 25);
    }
    public get squalls() {
        return getParamValues(this.parameterValues, 29);
    }
    public get kts25() {
        return getParamValues(this.parameterValues, 33);
    }
    public get kts34() {
        debugger;
        return getParamValues(this.parameterValues, 6);
    }
    public get kts50() {
        return getParamValues(this.parameterValues, 10);
    }
    public get kts64() {
        return getParamValues(this.parameterValues, 14);
    }
    public get kts87() {
        return getParamValues(this.parameterValues, 14);
    }
    public get radiiMax() {
        return getSpecifiedPaaramValues(this.parameterValues, [46, 50, 54, 58]);
    }
    public get eye() {
        return getSpecifiedPaaramValues(this.parameterValues, [45, 49, 53, 57]);
    }
}