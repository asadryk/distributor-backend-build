import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { ResponseModel } from 'src/common/model/response.model';
import { UtilService } from 'src/common/utils/util.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class UnitService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    createUnit(createUnitDto: CreateUnitDto): Promise<ResponseModel>;
    getAllUnits(query: GetAllQueryDTO): Promise<ResponseModel>;
    getUnitById(id: number): Promise<ResponseModel>;
    updateUnitById(id: number, updateUnitDto: UpdateUnitDto): Promise<ResponseModel>;
    deleteUnitById(id: number): Promise<ResponseModel>;
}
