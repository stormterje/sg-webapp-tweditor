export interface Storm {
    stormId: number | null;
    stormNumber: number | null;
    createdAt: Date | null;
    isDrill: boolean;
    isArchived: boolean;
    isActive: boolean;
    firstAnaTime: Date | null;
    stormName: string | null;
}