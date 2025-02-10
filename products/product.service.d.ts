import { ResponseModel } from 'src/common/model/response.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
import { UtilService } from 'src/common/utils/util.service';
export declare class ProductService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    createProduct(createProductDto: CreateProductDto): Promise<ResponseModel>;
    getAllProducts(query: GetAllQueryDTO): Promise<ResponseModel>;
    getProductById(id: number): Promise<ResponseModel>;
    updateProductById(id: number, updateProductDto: UpdateProductDto): Promise<ResponseModel>;
    deleteProductById(id: number): Promise<ResponseModel>;
}
