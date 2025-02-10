import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../common/model/response.model").ResponseModel>;
    getCustomerById(id: number): Promise<import("../common/model/response.model").ResponseModel>;
    getById(id: number, updateCustomerDto: UpdateCustomerDto): Promise<import("../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../common/model/response.model").ResponseModel>;
}
