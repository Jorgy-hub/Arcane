import { APILeagueSummoner } from "../../interfaces/League";
import { LeagueMastery } from "./Mastery";
import { LeagueEntry } from "./Entry";
import { League } from "../../League";

export class LeagueSummoner {
    public id: string;
    public name: string;
    public icon: string;
    public region: string;
    public accountId: string;
    public summonerLevel: number;
    private _client: League;

    /**
     * Main Summoner Class.
     * @param { League } client 
     * @param { string } region
     * @param { APILeagueSummoner } data 
     */
    constructor(client: League, region: string, data: APILeagueSummoner){
        /** Main Variables */
        this._client = client;
        this.region = region;

        /** Check if it's a valid account */
        if(!data.id)
            throw new Error("That Summoner wasn't found!");

        /** Main Class Data */
        this.id = data.id;
        this.name = data.name;
        this.accountId = data.accountId;
        this.summonerLevel = data.summonerLevel;
        this.icon = `http://ddragon.leagueoflegends.com/cdn/${this._client.version}/img/profileicon/${data.profileIconId}.png`;
    };
    
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    public getEntries(): Promise<LeagueEntry[]> {
        return this._client.getSummonerEntries(this.id, this.region);
    };

    /**
     * Get the Summoner Array of Masteries.
     * @returns { Promise<LeagueMastery[]> }
     */
    public getMasteries(): Promise<LeagueMastery[]> {
        return this._client.getSummonerMasteries(this.id, this.region);
    };

    /** 
     * Active Match in case the Summoner is in one.
     */
    public getActiveGame() {
        return this._client.getSummonerActiveGame(this.id, this.region);
    };
};