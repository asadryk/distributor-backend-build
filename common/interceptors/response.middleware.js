"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMiddleware = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../utils/constants");
let ResponseMiddleware = class ResponseMiddleware {
    use(req, res, next) {
        res.removeHeader('X-Powered-By');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('Permissions-Policy', this.generateDirective());
        res.setHeader('Feature-Policy', this.generateDirective());
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        res.setHeader('Content-Security-Policy', "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data: http:; style-src 'self' https: 'unsafe-inline'; font-src 'self' https: data:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https: http:;");
        next();
    }
    generateDirective() {
        const originDirectives = constants_1.Constants.allowedCorsDomain.map((origin) => `*=${origin}`).join('; ');
        return `${originDirectives}`;
    }
};
exports.ResponseMiddleware = ResponseMiddleware;
exports.ResponseMiddleware = ResponseMiddleware = __decorate([
    (0, common_1.Injectable)()
], ResponseMiddleware);
//# sourceMappingURL=response.middleware.js.map