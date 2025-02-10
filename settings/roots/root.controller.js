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
exports.RootController = void 0;
const common_1 = require("@nestjs/common");
const root_service_1 = require("./root.service");
const create_root_dto_1 = require("./dto/create-root.dto");
const update_root_dto_1 = require("./dto/update-root.dto");
const get_all_query_dto_1 = require("../../common/dto/get-all-query-dto");
let RootController = class RootController {
    constructor(rootService) {
        this.rootService = rootService;
    }
    async create(createRootDto) {
        return this.rootService.createRoot(createRootDto);
    }
    async getAll(query) {
        return this.rootService.getAllRoots(query);
    }
    async getRootById(id) {
        return this.rootService.getRootById(id);
    }
    async updateRootById(id, updateRootDto) {
        return this.rootService.updateRootById(id, updateRootDto);
    }
    async remove(id) {
        return this.rootService.deleteRootById(id);
    }
};
exports.RootController = RootController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_root_dto_1.CreateRootDto]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("getAll"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_query_dto_1.GetAllQueryDTO]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "getRootById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_root_dto_1.UpdateRootDto]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "updateRootById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "remove", null);
exports.RootController = RootController = __decorate([
    (0, common_1.Controller)('roots'),
    __metadata("design:paramtypes", [root_service_1.RootService])
], RootController);
//# sourceMappingURL=root.controller.js.map