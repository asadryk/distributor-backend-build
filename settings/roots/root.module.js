"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootModule = void 0;
const common_1 = require("@nestjs/common");
const root_service_1 = require("./root.service");
const root_controller_1 = require("./root.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_service_1 = require("../../common/utils/util.service");
let RootModule = class RootModule {
};
exports.RootModule = RootModule;
exports.RootModule = RootModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [root_controller_1.RootController],
        providers: [root_service_1.RootService, prisma_service_1.PrismaService, util_service_1.UtilService],
    })
], RootModule);
//# sourceMappingURL=root.module.js.map