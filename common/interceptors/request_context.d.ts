export declare class RequestContext {
    static nsid: string;
    readonly id: Number;
    request: Request;
    response: Response;
    constructor(request: Request, response: Response);
    static currentRequestContext(): RequestContext | null;
    static currentRequest(): Request | null;
    static currentUser(throwError?: boolean): any;
}
