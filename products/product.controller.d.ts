import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetAllQueryDTO } from 'src/common/dto/get-all-query-dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("../common/model/response.model").ResponseModel>;
    getAll(query: GetAllQueryDTO): Promise<import("../common/model/response.model").ResponseModel>;
    getProductById(id: number): Promise<import("../common/model/response.model").ResponseModel>;
    updateProductById(id: number, updateProductDto: UpdateProductDto): Promise<import("../common/model/response.model").ResponseModel>;
    remove(id: number): Promise<import("../common/model/response.model").ResponseModel>;
}
