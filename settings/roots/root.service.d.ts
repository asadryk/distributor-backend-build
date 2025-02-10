import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRootDto } from './dto/create-root.dto';
import { UpdateRootDto } from './dto/update-root.dto';
import { ResponseModel } from 'src/common/model/response.model';
import { UtilService } from 'src/common/utils/util.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class RootService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    createRoot(createRootDto: CreateRootDto): Promise<ResponseModel>;
    getAllRoots(query: GetAllQueryDTO): Promise<ResponseModel>;
    getRootById(id: number): Promise<ResponseModel>;
    updateRootById(id: number, updateRootDto: UpdateRootDto): Promise<ResponseModel>;
    deleteRootById(id: number): Promise<ResponseModel>;
}
