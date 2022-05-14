import { request } from 'undici';
export class Handler {
    public headers: any;
    private reset: number;
    private limit: number;
    private remaining: number;
    private localRemaining: number;  
    private queue: (() => Promise<any>)[] = [];

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
     * @param { any } data
     * @return { Promise<T> }
     */
    public _request<T>(method: string, url: string, data?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const latest = async () => this._executeRequest<T>(
                method,
                url,
                data
            )
            .then( resolve, reject );           
            this.queue.push(latest);      
            this._runQueue();
        });
    };

    private async _runQueue() {
        // Finished with the requests.
        if(this.queue.length === 0)
            return;

        // Handle current requests.
        if(this.localRemaining > 0) {
            let processes = this.queue.splice(0, this.localRemaining);
            this.localRemaining -= processes.length;
            await Promise.allSettled(processes.map((individualProcess) => individualProcess()));
            return;
        };

        // In case we are ratelimited.
        let timestamp = this.reset - Date.now();
        setTimeout(() => {
			this._runQueue();
        }, timestamp);
    };

    /**
     * This function will execute each individual Request.
     * @param { string } method 
     * @param { string } url 
     * @param { any } body 
     * @returns { Promise<T> }
     */
    private _executeRequest<T>(method: string, url: string, body: any): Promise<any>{
        return new Promise( (complete, reject) => {
            const req = request(
                url,
                Object.assign({ method: method, headers: { ...this.headers } })
            ).then(res => {
                if(res.statusCode == 200) {
                    this.remaining = Number(res.headers["x-ratelimit-remaining"]);
					this.limit = Number(res.headers["x-ratelimit-limit"]);
					this.reset = new Date(Number(res.headers["x-ratelimit-reset"]) * 1000).getTime();
                    complete(res.body);
                } else 
                    reject(
                        Object.assign({ statusCode: res.statusCode, error: res.body })
                    );            
            });
        });
    };    
};