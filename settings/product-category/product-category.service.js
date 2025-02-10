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
exports.ProductCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_service_1 = require("../../common/utils/util.service");
let ProductCategoryService = class ProductCategoryService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async createProductCategory(createProductCategoryDto) {
        try {
            const payload = this.util.removeUndefinedValues(createProductCategoryDto);
            const productCategory = await this.prisma.productCategory.create({ data: payload });
            return this.util.handleSuccess(productCategory, 'Product Category Added Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllProductCategories(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [productCategories, totalCategories] = await Promise.all([
                this.prisma.productCategory.findMany({
                    skip,
                    take,
                    orderBy: { name: sort },
                }),
                this.prisma.productCategory.count(),
            ]);
            return this.util.handleSuccess(productCategories, 'Get all product categories successfully', totalCategories);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getProductCategoryById(id) {
        try {
            const productCategory = await this.prisma.productCategory.findUnique({ where: { id } });
            if (!productCategory) {
                throw new common_1.NotFoundException(`Product Category with ID ${id} not found`);
            }
            return this.util.handleSuccess(productCategory, 'Get Product Category Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateProductCategoryById(id, updateProductCategoryDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateProductCategoryDto);
            const updatedProductCategory = await this.prisma.productCategory.update({
                where: { id },
                data: payload,
            });
            return this.util.handleSuccess(updatedProductCategory, 'Product Category Updated Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteProductCategoryById(id) {
        try {
            const productCategory = await this.prisma.productCategory.delete({ where: { id } });
            return this.util.handleSuccess(productCategory, 'Product Category Deleted Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.ProductCategoryService = ProductCategoryService;
exports.ProductCategoryService = ProductCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], ProductCategoryService);
//# sourceMappingURL=product-category.service.js.map