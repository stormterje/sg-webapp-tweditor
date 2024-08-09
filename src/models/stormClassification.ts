export interface StormClassification {
    stormClassificationId: 1;
    description: string;
    basinId: number;
    windRangeStart: number | null;
    windRangeEnd: number | null;
    shortName: string;
}