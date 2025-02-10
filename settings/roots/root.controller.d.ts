import { RootService } from './root.service';
import { CreateRootDto } from './dto/create-root.dto';
import { UpdateRootDto } from './dto/update-root.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class RootController {
    private readonly rootService;
    constructor(rootService: RootService);
    create(createRootDto: CreateRootDto): Promise<import("../../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../../common/model/response.model").ResponseModel>;
    getRootById(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
    updateRootById(id: number, updateRootDto: UpdateRootDto): Promise<import("../../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
}
