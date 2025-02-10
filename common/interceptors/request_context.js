"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContext = void 0;
const common_1 = require("@nestjs/common");
const cls = require("cls-hooked");
class RequestContext {
    constructor(request, response) {
        this.id = Math.random();
        this.request = request;
        this.response = response;
    }
    static currentRequestContext() {
        const session = cls.getNamespace(RequestContext.nsid);
        if (session && session.active) {
            return session.get(RequestContext.name);
        }
        return null;
    }
    static currentRequest() {
        let requestContext = RequestContext.currentRequestContext();
        if (requestContext) {
            return requestContext.request;
        }
        return null;
    }
    static currentUser(throwError) {
        let requestContext = RequestContext.currentRequestContext();
        if (requestContext) {
            const user = requestContext.request['user'];
            if (user) {
                return user;
            }
        }
        if (throwError) {
            throw new common_1.HttpException("Unauthorized", common_1.HttpStatus.UNAUTHORIZED);
        }
        return null;
    }
}
exports.RequestContext = RequestContext;
RequestContext.nsid = new Date().getTime().toString();
//# sourceMappingURL=request_context.js.map