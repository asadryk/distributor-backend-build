import { GetAllQueryDTO, SortType } from '../dto/get-all-query-dto';
import { ResponseModel } from '../model/response.model';
export declare class UtilService {
    removeBaseProperties(entity: any, fields?: string[]): void;
    getPagination(query: GetAllQueryDTO): {
        skip: number;
        take: number;
        sort: SortType;
    };
    handleError(error: Error): ResponseModel;
    handleSuccess(data: any, message: string, totalCount?: number): ResponseModel;
    removeUndefinedValues<T>(obj: any): any;
}
