import { off } from "process";
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

    async getUser( userID: string ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}/v${this.version}/users/${userID}/profile`
         )
         .then(async (res : any) => await res.json())
         .catch(async (err: any) => { throw new Error( await err.error.json().then((data:any) => data.message)) });
    }

    /**
     * Get the ranking of a specific member in a guild.
     * @param { string } userID 
     * @param { string } guildID 
     * @returns { Promise<any> }
     */
    async getMemberRank( userID: string, guildID: string ): Promise<any> {
        return await this.handler._request(
           "GET",
           `${this.url}/v${this.version}/guilds/${guildID}/rankings/members/${userID}/all`
        )
        .then(async (res : any) => await res.json())
        .catch(async (err: any) => { throw new Error( await err.error.json().then((data:any) => data.message)) });
    };

    /**
     * Gets the all-time rankings for a guild.
     * @param guildID 
     * @param offset 
     * @returns 
     */
    async getGuildRanks( guildID: string, offset?: number ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}/v${this.version}/guilds/${guildID}/rankings/all?offset=${offset || 0}`
         )
         .then(async (res : any) => await res.json())
         .catch(async (err: any) => { throw new Error( await err.error.json().then((data:any) => data.message)) });
    };
};