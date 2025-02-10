"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
class ResponseModel {
    constructor(success, data, message, totalCount = null) {
        this.success = success;
        this.data = data;
        this.message = message;
        if (totalCount)
            this.totalCount = totalCount;
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=response.model.js.map