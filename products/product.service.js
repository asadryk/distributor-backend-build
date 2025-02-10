"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const util_service_1 = require("../common/utils/util.service");
let ProductService = class ProductService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async createProduct(createProductDto) {
        try {
            const payload = this.util.removeUndefinedValues(createProductDto);
            const product = await this.prisma.product.create({ data: payload });
            return this.util.handleSuccess(product, 'Product Added Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllProducts(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [products, totalProducts] = await Promise.all([
                this.prisma.product.findMany({
                    skip,
                    take,
                    orderBy: { id: sort },
                }),
                this.prisma.product.count(),
            ]);
            return this.util.handleSuccess(products, 'Get All Products Successfully', totalProducts);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getProductById(id) {
        try {
            const product = await this.prisma.product.findUnique({ where: { id } });
            if (!product) {
                throw new common_1.NotFoundException(`Product with ID ${id} not found`);
            }
            return this.util.handleSuccess(product, 'Get Product Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateProductById(id, updateProductDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateProductDto);
            const updatedProduct = await this.prisma.product.update({
                where: { id },
                data: payload,
            });
            return this.util.handleSuccess(updatedProduct, 'Product Updated Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteProductById(id) {
        try {
            const product = await this.prisma.product.delete({ where: { id } });
            return this.util.handleSuccess(product, 'Product Deleted Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], ProductService);
//# sourceMappingURL=product.service.js.map