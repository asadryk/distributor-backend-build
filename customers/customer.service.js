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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const util_service_1 = require("../common/utils/util.service");
let CustomerService = class CustomerService {
    constructor(prisma, util) {
        this.prisma = prisma;
        this.util = util;
    }
    async validateRootAndArea(rootId, areaId) {
        const root = await this.prisma.root.findUnique({ where: { id: rootId } });
        if (!root)
            throw new common_1.NotFoundException(`Root with ID ${rootId} does not exist`);
        const area = await this.prisma.area.findFirst({ where: { id: areaId, rootId } });
        if (!area)
            throw new common_1.NotFoundException(`Area with ID ${areaId} under Root ID ${rootId} does not exist`);
        return { root, area };
    }
    async createTransaction(prisma, customerId, openingBalance) {
        return prisma.transaction.create({
            data: {
                transactionType: openingBalance > 0 ? 'Debit' : 'Credit',
                amount: Math.abs(openingBalance),
                transactionMethod: 'OpeningBalance',
                category: 'CustomerPayment',
                customerId,
                description: 'Opening balance',
            },
        });
    }
    async createCustomerData(createCustomerDto) {
        const payload = this.util.removeUndefinedValues(createCustomerDto);
        const customer = await this.prisma.customer.findFirst({
            where: {
                OR: [
                    { name: { equals: payload.name } },
                    { email: { equals: payload.email } }
                ]
            }
        });
        if (customer)
            throw new common_1.ForbiddenException(`Customer already exist with same ${(payload.name === customer.name && payload.email === customer.email) ? 'name and email' : payload.name === customer.name ? 'name' : 'email'}`);
        await this.validateRootAndArea(payload.rootId, payload.areaId);
        let result;
        if (payload.openingBalance !== undefined && payload.openingBalance !== 0) {
            result = await this.prisma.$transaction(async (prisma) => {
                const customer = await prisma.customer.create({ data: payload });
                const transaction = await this.createTransaction(prisma, customer.id, payload.openingBalance);
                return { customer, transaction };
            });
        }
        else {
            result = await this.prisma.customer.create({ data: createCustomerDto });
        }
        return result;
    }
    async handleOpeningBalanceUpdate(id, payload, customer) {
        const result = await this.prisma.$transaction(async (prisma) => {
            const updatedCustomer = await prisma.customer.update({
                where: { id },
                data: payload,
            });
            let transaction;
            if (+customer.openingBalance !== 0) {
                transaction = await prisma.transaction.findFirst({
                    where: { customerId: id, transactionMethod: 'OpeningBalance' },
                });
                if (!transaction) {
                    throw new common_1.NotFoundException(`Transaction for customer ID ${id} not found`);
                }
                if (payload.openingBalance && payload.openingBalance != 0) {
                    transaction = await prisma.transaction.update({
                        where: { id: transaction.id },
                        data: {
                            transactionType: payload.openingBalance > 0 ? 'Debit' : 'Credit',
                            amount: Math.abs(payload.openingBalance),
                            transactionMethod: 'OpeningBalance',
                            category: 'CustomerPayment',
                            customerId: id,
                            description: 'Opening balance',
                        },
                    });
                }
                else {
                    transaction = await prisma.transaction.delete({ where: { id: transaction.id } });
                }
            }
            else {
                transaction = await this.createTransaction(prisma, id, payload.openingBalance);
            }
            return { updatedCustomer, transaction };
        });
        return this.util.handleSuccess(result, 'Customer updated successfully');
    }
    async createCustomer(createCustomerDto) {
        try {
            const customer = await this.createCustomerData(createCustomerDto);
            return this.util.handleSuccess(customer, 'Customer created successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getAllCustomers(query) {
        try {
            const { skip, take, sort } = this.util.getPagination(query);
            const [customers, totalCustomers] = await Promise.all([
                this.prisma.customer.findMany({
                    skip,
                    take,
                    orderBy: { id: sort },
                    include: { root: true, area: true },
                }),
                this.prisma.customer.count(),
            ]);
            return this.util.handleSuccess(customers, 'Get all customers successfully', totalCustomers);
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async getCustomerById(id) {
        try {
            const customer = await this.prisma.customer.findUnique({ where: { id }, include: { root: true, area: true } });
            if (!customer)
                throw new common_1.NotFoundException(`Customer with ID ${id} not found`);
            return this.util.handleSuccess(customer, 'Customer retrieved successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async updateCustomerById(id, updateCustomerDto) {
        try {
            const payload = this.util.removeUndefinedValues(updateCustomerDto);
            const customerValidate = await this.prisma.customer.findFirst({
                where: {
                    OR: [
                        { name: { equals: payload.name } },
                        { email: { equals: payload.email } }
                    ]
                }
            });
            if (customerValidate)
                throw new common_1.ForbiddenException(`Customer already exist with same ${(payload.name === customerValidate.name && payload.email === customerValidate.email) ? 'name and email' : payload.name === customerValidate.name ? 'name' : 'email'}`);
            if (payload.rootId || payload.areaId) {
                await this.validateRootAndArea(payload.rootId, payload.areaId);
            }
            const customer = await this.prisma.customer.findUnique({ where: { id } });
            if (!customer) {
                throw new common_1.NotFoundException(`Customer with ID ${id} not found`);
            }
            if (payload.openingBalance !== +customer.openingBalance) {
                return this.handleOpeningBalanceUpdate(id, payload, customer);
            }
            const updatedCustomer = await this.prisma.customer.update({
                where: { id }, data: payload
            });
            return this.util.handleSuccess(updatedCustomer, 'Customer updated successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
    async deleteCustomerById(id) {
        try {
            const customer = await this.prisma.customer.delete({ where: { id } });
            return this.util.handleSuccess(customer, 'Customer deleted successfully');
        }
        catch (error) {
            return this.util.handleError(error);
        }
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        util_service_1.UtilService])
], CustomerService);
//# sourceMappingURL=customer.service.js.map