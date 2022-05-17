import { APILeagueMastery} from "../../interfaces/League";
import { League } from "../../League";
import { LeagueChampion } from "./Champion";

export class LeagueMastery {
    public championId: number;
    public championLevel: number;
    public championPoints: number;
    public lastPlayTime: number;
    public championPointsSinceLastLevel: number;
    public championPointsUntilNextLevel: number;
    public chestGranted: boolean;
    public tokensEarned: number;
    public summonerId: string;
    private _client: League;

    /**
     * Main Class for a Mastery stored in a Profile.
     * @param { League} client 
     * @param { APILeagueMastery } data 
     */
    constructor(client: League, data: APILeagueMastery){
        /** Main Data. */
        this._client = client;

        /** Check if the information is valid. */
        if(!data.championId)
            throw new Error("No champions was given!");

        /** Main Mastery Structure. */
        this.championId = data.championId;
        this.championLevel = data.championLevel;
        this.championPoints = data.championPoints;
        this.lastPlayTime = data.lastPlayTime;
        this.championPointsSinceLastLevel = data.championPointsSinceLastLevel;
        this.championPointsUntilNextLevel = data.championPointsUntilNextLevel;
        this.chestGranted = data.chestGranted;
        this.tokensEarned = data.tokensEarned;
        this.summonerId = data.summonerId;
    };

    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    public getChampInfo(): Promise<LeagueChampion> {
        return this._client.getChampionById(this.championId);
    }; 
};