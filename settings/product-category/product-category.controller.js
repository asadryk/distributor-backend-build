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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryController = void 0;
const common_1 = require("@nestjs/common");
const product_category_service_1 = require("./product-category.service");
const create_product_category_dto_1 = require("./dto/create-product-category.dto");
const update_product_category_dto_1 = require("./dto/update-product-category.dto");
const get_all_query_dto_1 = require("../../common/dto/get-all-query-dto");
let ProductCategoryController = class ProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    async create(createProductCategoryDto) {
        return this.productCategoryService.createProductCategory(createProductCategoryDto);
    }
    async getAll(query) {
        return this.productCategoryService.getAllProductCategories(query);
    }
    async getProductCategoryById(id) {
        return this.productCategoryService.getProductCategoryById(id);
    }
    async updateProductCategoryById(id, updateProductCategoryDto) {
        return this.productCategoryService.updateProductCategoryById(id, updateProductCategoryDto);
    }
    async remove(id) {
        return this.productCategoryService.deleteProductCategoryById(id);
    }
};
exports.ProductCategoryController = ProductCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_category_dto_1.CreateProductCategoryDto]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("getAll"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_query_dto_1.GetAllQueryDTO]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "getProductCategoryById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_category_dto_1.UpdateProductCategoryDto]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "updateProductCategoryById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "remove", null);
exports.ProductCategoryController = ProductCategoryController = __decorate([
    (0, common_1.Controller)('product-categories'),
    __metadata("design:paramtypes", [product_category_service_1.ProductCategoryService])
], ProductCategoryController);
//# sourceMappingURL=product-category.controller.js.map