import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<import("../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../common/model/response.model").ResponseModel>;
    getById(id: number): Promise<import("../common/model/response.model").ResponseModel>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<import("../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../common/model/response.model").ResponseModel>;
}
