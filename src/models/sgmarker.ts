import { Key } from "react";

export interface SGMarker {
    key: Key;
    time?: string;
    dateUTC?: Date;
    color?: string;
    lat: number;
    lng: number;
    maxWinds?: number;
    maxGusts?: number;
    suqalls?: number;
    kts22?: number;
    kts34?: number;
    kts50?: number;
    kts64?: number;
    kts87?: number;
    max?: number;
    eye?: number;
    dot?: boolean;
}
