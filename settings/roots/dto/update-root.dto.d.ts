declare class UpdateAreaDto {
    id: number;
    name?: string;
}
export declare class UpdateRootDto {
    name?: string;
    areas?: UpdateAreaDto[];
}
export {};
