"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterceptorsModule = void 0;
const common_1 = require("@nestjs/common");
const request_middleware_1 = require("./request.middleware");
let InterceptorsModule = class InterceptorsModule {
};
exports.InterceptorsModule = InterceptorsModule;
exports.InterceptorsModule = InterceptorsModule = __decorate([
    (0, common_1.Module)({
        providers: [request_middleware_1.RequestMiddleware],
    })
], InterceptorsModule);
//# sourceMappingURL=interceptors.module.js.map