import { Handler } from "./Handler";
import { UnbelievaBoatMember } from "./structures/UnbelievaBoat/Member";


const API = {
    url: "https://unbelievaboat.com",
    version: 1
};

export  class UnbelievaBoat {
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

    async getMember( guildID: string, userID: string ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/api/v${this.version}/guilds/${guildID}/users/${userID}`
        ).then((data: any) => new UnbelievaBoatMember(data));
    };

    async getGuild( guildID: string ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/api/v${this.version}/guilds/${guildID}`
        );
    }

}