"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilService = void 0;
const common_1 = require("@nestjs/common");
const response_model_1 = require("../model/response.model");
const library_1 = require("@prisma/client/runtime/library");
let UtilService = class UtilService {
    removeBaseProperties(entity, fields = []) {
        fields = [...["_id", "createdBy", "createdOn", "modifiedBy", "modifiedOn"]];
        for (let item of fields) {
            delete entity[item];
        }
    }
    getPagination(query) {
        const { page = 1, count = 10, sort = 'asc' } = query;
        const skip = (page - 1) * count;
        const take = count;
        return { skip, take, sort };
    }
    handleError(error) {
        console.log(error);
        if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException)
            throw error;
        else if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.code === 'P2002')
                error.message = `Record already exist with the same ${error.meta?.target}.`;
            else if (error.code === 'P2003')
                error.message = `Cannot delete the record because it is associated with ${error.meta?.field_name} records.`;
            else if (error.code === 'P2025')
                error.message = error.meta?.cause;
        }
        else if (error instanceof library_1.PrismaClientInitializationError) {
            throw new common_1.NotFoundException('Unable to connect to the database. Please try again later.');
        }
        return new response_model_1.ResponseModel(false, null, error.message || 'Something went wrong');
    }
    handleSuccess(data, message, totalCount) {
        return new response_model_1.ResponseModel(true, data, message, totalCount);
    }
    removeUndefinedValues(obj) {
        for (const key in obj) {
            if (obj[key] === undefined)
                delete obj[key];
        }
        return obj;
    }
};
exports.UtilService = UtilService;
exports.UtilService = UtilService = __decorate([
    (0, common_1.Injectable)()
], UtilService);
//# sourceMappingURL=util.service.js.map