export interface storeDto {
    StoreId : string | null;
    StoreName : string | null;
    Address : string | null;
    StorePhone : string | null;
    OpenHours : string | null;
    Status : string | null;
}

export interface SuitabilityDto {
    FilterID: string;
    FilterName: string;
    FilterValue: string;
    FilterImage: string;
    IsSuitability: boolean;
}