import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ResponseModel } from 'src/common/model/response.model';
import { UtilService } from 'src/common/utils/util.service';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class ProductCategoryService {
    private prisma;
    private readonly util;
    constructor(prisma: PrismaService, util: UtilService);
    createProductCategory(createProductCategoryDto: CreateProductCategoryDto): Promise<ResponseModel>;
    getAllProductCategories(query: GetAllQueryDTO): Promise<ResponseModel>;
    getProductCategoryById(id: number): Promise<ResponseModel>;
    updateProductCategoryById(id: number, updateProductCategoryDto: UpdateProductCategoryDto): Promise<ResponseModel>;
    deleteProductCategoryById(id: number): Promise<ResponseModel>;
}
