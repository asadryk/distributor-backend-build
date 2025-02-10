export type SortType = 'asc' | 'desc';
export declare class GetAllQueryDTO {
    sort: SortType;
    page: number;
    count: number;
}
export declare class GetAllQueryPagination {
    page: number;
    count: number;
}
