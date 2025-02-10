import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ResponseModel } from 'src/common/model/response.model';
import { UtilService } from 'src/common/utils/util.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class CompanyService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<ResponseModel>;
    getAllCompanies(query: GetAllQueryDTO): Promise<ResponseModel>;
    getCompanyById(id: number): Promise<ResponseModel>;
    updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<ResponseModel>;
    deleteCompany(id: number): Promise<ResponseModel>;
}
