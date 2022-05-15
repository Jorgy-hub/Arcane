import { APIUnbelievaBoatGuild } from "../../interfaces/UnbelievaBoat";
import { UnbelievaBoat } from "../../UnbelievaBoat";
import { UnbelievaBoatGuildLb } from "./GuildRanks";

interface LbConfig {
    limit: number;
    page: number;
    offset: number;
}

export class UnbelievaBoatGuild {
    private _client: UnbelievaBoat;
    private _id: string;
    private _data: APIUnbelievaBoatGuild;

    /**
     * 
     * @param { UnbelievaBoat } client 
     * @param { string } id 
     * @param { APIUnbelievaBoatGuild } data 
     */
    constructor(client: UnbelievaBoat, id: string, data: APIUnbelievaBoatGuild){
        this._client = client;
        this._id = id;
        this._data = data;
    };

    get id() {
        return this._id;
    };

    /**
     * This function will be used to get the specified ranks of a guild.
     * @param { LbConfig } config 
     * @returns { Promise<UnbelievaBoatGuildLb> }
     */
    public getRanks(config?: LbConfig): Promise<UnbelievaBoatGuildLb> {
        return this._client.getGuildLeaderboard( this._id, config?.limit, config?.page, config?.offset );
    };
};