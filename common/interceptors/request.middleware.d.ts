import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
export declare class RequestMiddleware implements NestMiddleware {
    constructor();
    use(req: any, res: Response, next: NextFunction): Promise<void>;
}
