import { ResponseModel } from 'src/common/model/response.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
import { UtilService } from 'src/common/utils/util.service';
export declare class CustomerService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    private validateRootAndArea;
    private createTransaction;
    private createCustomerData;
    private handleOpeningBalanceUpdate;
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<ResponseModel>;
    getAllCustomers(query: GetAllQueryDTO): Promise<ResponseModel>;
    getCustomerById(id: number): Promise<ResponseModel>;
    updateCustomerById(id: number, updateCustomerDto: UpdateCustomerDto): Promise<ResponseModel>;
    deleteCustomerById(id: number): Promise<ResponseModel>;
}
