"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
    static getCorsDomain() {
        const allowedCorsDomain = process.env.allowedCorsDomain;
        if (!allowedCorsDomain)
            return ["*"];
        let domains = [...allowedCorsDomain.split(",")];
        return domains;
    }
}
exports.Constants = Constants;
Constants.allowedCorsDomain = process.env.allowedCorsDomain ? Constants.getCorsDomain() : ["*"];
//# sourceMappingURL=constants.js.map