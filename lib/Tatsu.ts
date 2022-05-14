import { Handler } from "./Handler";

const API = {
    url: "https://api.tatsu.gg",
    version: 1
};

export  class Tatsu {
    url: string;
    token: string;
    version: number;
    handler: Handler;

    constructor( config: any ){
        this.url = API.url;
        this.version = API.version;
        this.token = config.token;
        this.handler = new Handler( 
            { "Authorization": config.token }
        );
    };

    /**
     * Get the ranking of a specific member in a guild.
     * @param { string } userID 
     * @param { string } guildID 
     * @returns { Promise<any> }
     */

    async getUserRank( userID: string, guildID: string ): Promise<any> {
        return await this.handler._request(
           "GET",
           `${this.url}/v${this.version}/guilds/${guildID}/rankings/members/${userID}/all`
        )
        .then(async (res : any) => await res.json())
        .catch(async (err: any) => { throw new Error( await err.error.json().then((data:any) => data.message)) });
    };
};