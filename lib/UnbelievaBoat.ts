import { Handler } from "./Handler";
import { UnbelievaBoatGuild } from "./structures/UnbelievaBoat/Guild";
import { UnbelievaBoatGuildLb } from "./structures/UnbelievaBoat/GuildRanks";
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

    /**
     * Main Class for the UnbelievaBoat API.
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
     * This Function is used to obtain the rank and balance of a member in a guild.
     * @param { string } guildID 
     * @param { string } userID 
     * @returns { Promise<UnbelievaBoatMember> }
     */
    async getMember( guildID: string, userID: string ): Promise<UnbelievaBoatMember> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/api/v${this.version}/guilds/${guildID}/users/${userID}`
        ).then((data: any) => new UnbelievaBoatMember(this, guildID, data));
    };

    /**
     * This function is used to get an specific Guild data.
     * @param { string } guildID 
     * @returns { UnbelievaBoatGuild }
     */
    async getGuild( guildID: string ): Promise<UnbelievaBoatGuild> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/api/v${this.version}/guilds/${guildID}`
        ).then((data: any) => new UnbelievaBoatGuild(this, guildID, data));
    };

    /**
     * This function is used to get the leaderboard of a guild.
     * @param { string } guildID 
     * @param { number } limit 
     * @param { number } page 
     * @param { number } offset 
     * @returns { Promise<any> }
     */
    async getGuildLeaderboard( guildID: string, limit?: number, page?: number, offset?: number ): Promise<any> {
        return await this.handler._request(
            "GET",
            `${this.url}`,
            `/api/v${this.version}/guilds/${guildID}/users?limit=${limit || 1000}&page=${page || 1}&offset=${offset || 0}`
        ).then((data: any) => new UnbelievaBoatGuildLb(this, guildID, data.users));
    };
};