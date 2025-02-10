import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class ProductCategoryController {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
    create(createProductCategoryDto: CreateProductCategoryDto): Promise<import("../../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../../common/model/response.model").ResponseModel>;
    getProductCategoryById(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
    updateProductCategoryById(id: number, updateProductCategoryDto: UpdateProductCategoryDto): Promise<import("../../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../../common/model/response.model").ResponseModel>;
}
