import { UnitService } from './unit.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class UnitController {
    private readonly unitService;
    constructor(unitService: UnitService);
    create(createUnitDto: CreateUnitDto): Promise<import("../../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../../common/model/response.model").ResponseModel>;
    getUnitById(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
    updateUnitById(id: number, updateUnitDto: UpdateUnitDto): Promise<import("../../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
}
