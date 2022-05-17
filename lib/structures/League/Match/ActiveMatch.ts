import { APILeagueActiveMatch, APILeagueActiveMatchParticipant } from "../../../interfaces/League";
import { League } from "../../../League";
import { LeagueMatchParticipant } from "./MatchParticipant";

export class LeagueActiveMatch {
    public _client: League;
    public region: string;
    public gameId: number;
    public mapId: number;
    public gameMode: string;
    public gameType: string;
    public gameQueueConfigId: number;
    public participants: LeagueMatchParticipant[];
    public observers: any;
    public platformId: string;
    public bannedChampions: any[];
    public gameStartTime: number;
    public gameLength: number;
 
    constructor(client: League, region: string, data:APILeagueActiveMatch){
        /** Main Data */
        this._client = client;
        this.region = region;

        /** Valid Existance */
        if(!data.gameId)
            throw new Error("No valid Match was sent through the API");

        /** Main Class Values */
        this.gameId = data.gameId;
        this.mapId = data.mapId;
        this.gameMode = data.gameMode;
        this.gameType = data.gameType;
        this.gameQueueConfigId = data.gameQueueConfigId;
        this.participants = data.participants.map((participant: APILeagueActiveMatchParticipant) => new LeagueMatchParticipant(client, region, participant));
        this.platformId = data.platformId;
        this.bannedChampions = data.bannedChampions;
        this.gameStartTime = data.gameStartTime;
        this.gameLength = data.gameLength;
    };
};