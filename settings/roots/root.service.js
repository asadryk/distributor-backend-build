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
exports.RootService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_service_1 = require("../../common/utils/util.service");
let RootService = class RootService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async createRoot(createRootDto) {
        try {
            const payload = this.util.removeUndefinedValues(createRootDto);
            const result = await this.prisma.$transaction(async (prisma) => {
                const root = await prisma.root.create({ data: { name: payload.name } });
                const areas = payload.areas.map(area => ({
                    rootId: root.id,
                    name: area.name,
                }));
                const createdAreas = await prisma.area.createManyAndReturn({ data: areas });
                return { root, createdAreas };
            });
            return this.util.handleSuccess(result, 'Root and areas added successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllRoots(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [roots, totalRoots] = await Promise.all([
                this.prisma.root.findMany({
                    skip,
                    take,
                    orderBy: { name: sort },
                    include: { areas: true }
                }),
                this.prisma.root.count(),
            ]);
            return this.util.handleSuccess(roots, 'Get all roots successfully', totalRoots);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getRootById(id) {
        try {
            const root = await this.prisma.root.findUnique({ where: { id }, include: { areas: true } });
            if (!root) {
                throw new common_1.NotFoundException(`Root with ID ${id} not found`);
            }
            return this.util.handleSuccess(root, 'Get Root and Areas Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateRootById(id, updateRootDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateRootDto);
            if (payload.areas && payload.areas.length > 0) {
                const areaIds = payload.areas.map(area => area.id);
                const areasInDb = await this.prisma.area.findMany({
                    where: { rootId: id, id: { in: areaIds } },
                    select: { id: true }
                });
                if (areasInDb.length !== areaIds.length) {
                    throw new Error('One or more areas have a different rootId');
                }
            }
            const result = await this.prisma.$transaction(async (prisma) => {
                const root = payload.name
                    ? await prisma.root.update({
                        where: { id },
                        data: { name: payload.name }
                    }) : null;
                if (payload.areas && payload.areas.length > 0) {
                    await Promise.all(payload.areas.map(area => prisma.area.update({
                        where: { id: area.id }, data: { name: area.name }
                    })));
                }
                return { root, areas: payload.areas };
            });
            return this.util.handleSuccess(result, `${result.root && result.areas?.length ? 'Root and Areas' : result.root ? 'Root' : 'Areas'} Updated Successfully`);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteRootById(id) {
        try {
            const root = await this.prisma.root.delete({ where: { id } });
            return this.util.handleSuccess(root, 'Root Deleted Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.RootService = RootService;
exports.RootService = RootService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], RootService);
//# sourceMappingURL=root.service.js.map