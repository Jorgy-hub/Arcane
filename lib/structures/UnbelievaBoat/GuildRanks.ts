import { APIUnbelievaBoatMember } from "../../interfaces/UnbelievaBoat";
import { UnbelievaBoatMember } from "./Member";
import { UnbelievaBoat } from "../../UnbelievaBoat";

export class UnbelievaBoatGuildLb {
    private _client: UnbelievaBoat;
    private _guildID: string;
    private _rankings: APIUnbelievaBoatMember[];

    /**
     * This is a Ranking list class.
     * @param { UnbelievaBoat } client 
     * @param { string } guildID 
     * @param { APIUnbelievaBoatMember } data 
     */
    constructor(client: UnbelievaBoat, guildID: string, data: APIUnbelievaBoatMember[]){
        this._client = client;
        this._guildID = guildID;
        this._rankings = data;
    };

    get guild() {
        return this._client.getGuild(  this._guildID );
    };

    get rankings(): UnbelievaBoatMember[] {
		return this._rankings.map(rank  => new UnbelievaBoatMember(this._client, this._guildID, rank));
	};
};