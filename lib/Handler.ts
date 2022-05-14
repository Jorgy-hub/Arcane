import { Client } from 'undici';
export class Handler {
    public headers: any;
    private reset: number;
    private limit: number;
    private remaining: number;
    private localRemaining: number;  
    private queue: (() => Promise<any>)[] = [];

    /**
     * Main Class of the Package, this handles all the ratelimits and requests in the different APIS.
     * @param { Record<string, string> } globals 
     */
    constructor( globals: Record<string, string> ) {    
        this.limit = 60;
        this.remaining = 60;
		this.localRemaining = 60;
        this.reset = Date.now();
        this.headers = globals;
    };

    /**
     * This is an Individual Request it will auto add into the Queue.
     * @param { string } method
     * @param { string } url
     * @param { string } endpoint
     * @param { any } data
     * @return { Promise<T> }
     */
    public _request<T>(method: string, url: string, endpoint: string, data?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const latest = async () => this._executeRequest<T>(
                method,
                url,
                endpoint,
                data
            )
            .then( resolve, reject );           
            this.queue.push(latest);      
            this._runQueue();
        });
    };

    /**
     * This Function will be constantly verifying for the Ratelimits.
     */
    private async _runQueue() {
        // Finished with the requests.
        if(this.queue.length === 0)
            return;

        // Handle current requests.
        const rateLimit = { 
            localRemaining: this.localRemaining,
            remaining: this.remaining,
            reset: this.reset,
            limit: this.limit
        }

        if(rateLimit.localRemaining > 0) {
            let processes = this.queue.splice(0, rateLimit.localRemaining);
            rateLimit.localRemaining -= processes.length;
            await Promise.allSettled(processes.map((individualProcess) => individualProcess()));
            rateLimit.localRemaining = rateLimit.remaining;
            return;
        };

        // In case we are ratelimited.
        let timestamp = this.reset - Date.now();
        setTimeout(() => {
            this.remaining = rateLimit.limit;
            this.localRemaining = rateLimit.limit;
			this._runQueue();
        }, timestamp);
    };

    /**
     * This function will execute each individual Request.
     * @param { string } method 
     * @param { string } url 
     * @param { string } endpoint
     * @param { any } body 
     * @returns { Promise<T> }
     */
    private _executeRequest<T>(method: string, url: string, endpoint:string, body: any): Promise<any>{
        return new Promise( (complete, reject) => {
            const data: Buffer[] = [];
            const client = new Client(url);
            
            client.dispatch(Object.assign({
                path: endpoint,
                method: method,
                headers: { ...this.headers }
            }), {
                onConnect: () => true,
                onHeaders: (statusCode, headers) => true,
                onData: ( chunk ) => {
                    data.push(chunk);
                    return true;
                },
                onComplete: (trailers) => {
                    const res = Buffer.concat(data).toString('utf8');
                    complete(JSON.parse(res) as T);
                },
                onError: (error) => {
                    reject(error);
                }
            });
        });
    };    
};