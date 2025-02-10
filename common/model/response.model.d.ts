export declare class ResponseModel {
    success: boolean;
    data: any;
    message: string;
    totalCount?: number;
    constructor(success: boolean, data: any, message: string, totalCount?: number | null);
}
