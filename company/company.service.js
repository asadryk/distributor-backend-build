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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const util_service_1 = require("../common/utils/util.service");
let CompanyService = class CompanyService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async createCompany(createCompanyDto) {
        try {
            const payload = this.util.removeUndefinedValues(createCompanyDto);
            const company = await this.prisma.company.create({
                data: payload,
            });
            return this.util.handleSuccess(company, 'Company Created Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllCompanies(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [companies, totalCompanies] = await Promise.all([
                this.prisma.company.findMany({
                    skip,
                    take,
                    orderBy: { id: sort },
                }),
                this.prisma.customer.count(),
            ]);
            return this.util.handleSuccess(companies, 'Get all companies successfully', totalCompanies);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getCompanyById(id) {
        try {
            const company = await this.prisma.company.findUnique({ where: { id } });
            if (!company) {
                throw new common_1.NotFoundException(`Company with ID ${id} not found`);
            }
            return this.util.handleSuccess(company, 'Company Found');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateCompany(id, updateCompanyDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateCompanyDto);
            const updatedCompany = await this.prisma.company.update({
                where: { id },
                data: payload,
            });
            return this.util.handleSuccess(updatedCompany, 'Company Updated Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteCompany(id) {
        try {
            const deletedCompany = await this.prisma.company.delete({ where: { id } });
            return this.util.handleSuccess(deletedCompany, 'Company Deleted Successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], CompanyService);
//# sourceMappingURL=company.service.js.map