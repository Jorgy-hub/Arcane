import { APIUnbelievaBoatMember } from "../../interfaces/UnbelievaBoat";
import { UnbelievaBoat } from "../../UnbelievaBoat";

export class UnbelievaBoatMember {
    private _client: UnbelievaBoat;
    private _guildID: string;
    private _data: APIUnbelievaBoatMember;

    /**
     * This Class is the main class structure for Members.
     * @param { UnbelievaBoat } client 
     * @param { string } guildID 
     * @param { APIUnbelievaBoatMember } data 
     */
    constructor(client: UnbelievaBoat, guildID: string, data: APIUnbelievaBoatMember){
        this._client = client;
        this._guildID = guildID;
        this._data = data;
    };

    get guild() {
        return this._client.getGuild(  this._guildID );
    };
    
    get rank() {
        return this._data.rank;
    };

    get guild_id() {
        return this._guildID;
    };

    get user_id() {
        return this._data.user_id;
    };

    get cash() {
        return this._data.cash;
    };

    get bank() {
        return this._data.bank;
    };

    get total() {
        return this._data.total;
    };
};