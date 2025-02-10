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
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_service_1 = require("../../common/utils/util.service");
let UnitService = class UnitService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async createUnit(createUnitDto) {
        try {
            const payload = this.util.removeUndefinedValues(createUnitDto);
            const unit = await this.prisma.unit.create({ data: payload });
            return this.util.handleSuccess(unit, 'Unit Added Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllUnits(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [units, totalUnits] = await Promise.all([
                this.prisma.unit.findMany({
                    skip,
                    take,
                    orderBy: { name: sort },
                }),
                this.prisma.unit.count(),
            ]);
            return this.util.handleSuccess(units, 'Get all units successfully', totalUnits);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getUnitById(id) {
        try {
            const unit = await this.prisma.unit.findUnique({ where: { id } });
            if (!unit) {
                throw new common_1.NotFoundException(`Unit with ID ${id} not found`);
            }
            return this.util.handleSuccess(unit, 'Get Unit Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateUnitById(id, updateUnitDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateUnitDto);
            const updatedUnit = await this.prisma.unit.update({
                where: { id },
                data: payload,
            });
            return this.util.handleSuccess(updatedUnit, 'Unit Updated Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteUnitById(id) {
        try {
            const unit = await this.prisma.unit.delete({ where: { id } });
            return this.util.handleSuccess(unit, 'Unit Deleted Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.UnitService = UnitService;
exports.UnitService = UnitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], UnitService);
//# sourceMappingURL=unit.service.js.map