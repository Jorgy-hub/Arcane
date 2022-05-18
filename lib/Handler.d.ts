export declare class Handler {
    headers: any;
    private reset;
    private limit;
    private remaining;
    private localRemaining;
    private queue;
    /**
     * Main Class of the Package, this handles all the ratelimits and requests in the different APIS.
     * @param { Record<string, string> } globals
     */
    constructor(globals: Record<string, string>);
    /**
     * This is an Individual Request it will auto add into the Queue.
     * @param { string } method
     * @param { string } url
     * @param { string } endpoint
     * @param { any } data
     * @return { Promise<T> }
     */
    _request<T>(method: string, url: string, endpoint: string, data?: any): Promise<T>;
    /**
     * This Function will be constantly verifying for the Ratelimits.
     */
    private _runQueue;
    /**
     * This function will execute each individual Request.
     * @param { string } method
     * @param { string } url
     * @param { string } endpoint
     * @param { any } body
     * @returns { Promise<T> }
     */
    private _executeRequest;
}
