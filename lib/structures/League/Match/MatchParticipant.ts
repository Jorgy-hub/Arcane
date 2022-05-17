import { APILeagueActiveMatchParticipant } from "../../../interfaces/League";
import { League } from "../../../League";
import { LeagueChampion } from "../Champion";
import { LeagueEntry } from "../Entry";
import { LeagueMastery } from "../Mastery";
import { LeagueSummoner } from "../Summoner";

export class LeagueMatchParticipant {
    public _client: League;
    public region: string;
    public teamId: number;
    public spell1Id: number;
    public spell2Id: number;
    public championId: number;
    public summonerName: string;
    public bot: boolean;
    public summonerId: string;
    public gameCustomizationObjects: any[];
    public perks: any[];

    /**
     * Main Class for Matches Players.
     * @param { League } client 
     * @param { APILeagueActiveMatchParticipant } data 
     */
    constructor(client: League, region: string, data: APILeagueActiveMatchParticipant){
        /** Main Data */
        this._client = client;
        this.region = region;

        /** Valid Existance */
        if(!data.summonerId)
            throw new Error("No Summoner Id was given in the Participant API Error");
        
        /** Main Class Values */
        this.summonerId = data.summonerId;
        this.summonerName = data.summonerName;
        this.bot = data.bot;
        this.championId = data.championId;
        this.teamId = data.teamId;
        this.spell1Id = data.spell1Id;
        this.spell2Id = data.spell2Id; 
        this.gameCustomizationObjects = data.gameCustomizationObjects;
        this.perks = data.perks;
    };

    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    public getSummoner(): Promise<LeagueSummoner> {
        return this._client.getSummoner(this.summonerName, this.region);
    };

    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    public getChampionInfo(): Promise<LeagueChampion> {
        return this._client.getChampionById(this.championId);
    };

    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    public getEntries(): Promise<LeagueEntry[]> {
        return this._client.getSummonerEntries(this.summonerId, this.region);
    };

    /**
     * Get the Summoner Array of Masteries.
     * @returns { Promise<LeagueMastery[]> }
     */
    public getMasteries(): Promise<LeagueMastery[]> {
        return this._client.getSummonerMasteries(this.summonerId, this.region);
    };
 };