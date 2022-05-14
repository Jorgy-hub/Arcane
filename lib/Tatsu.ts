import { off } from "process";
import { Handler } from "./Handler";
import { APITatsuUser } from "./interfaces/Tatsu";
import { TatsuUser } from "./structures/Tatsu/User";

const API = {
    url: "https://api.tatsu.gg",
    version: 1
};

export  class Tatsu {
    url: string;
    token: string;
    version: number;
    handler: Handler;

    /**
     * Main Class for the Tatsu API.
     * @param { any } config 
     */
    constructor( config: any ){
        this.url = API.url;
        this.version = API.version;
        this.token = config.token;
        this.handler = new Handler( 
            { "Authorization": config.token }
        );
    };

    /**
     * Function to Obtain Tatsu Profile.
     * @param { string } userID 
     * @returns { Promise<any> }
     */
    async getUser( userID: string ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/v${this.version}/users/${userID}/profile`
        ).then((data: any) => new TatsuUser(data));
    }
};