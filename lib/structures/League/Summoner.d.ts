import { APILeagueSummoner } from "../../interfaces/League";
import { LeagueMastery } from "./Mastery";
import { LeagueEntry } from "./Entry";
import { League } from "../../League";
export declare class LeagueSummoner {
    id: string;
    name: string;
    icon: string;
    region: string;
    accountId: string;
    summonerLevel: number;
    private _client;
    /**
     * Main Summoner Class.
     * @param { League } client
     * @param { string } region
     * @param { APILeagueSummoner } data
     */
    constructor(client: League, region: string, data: APILeagueSummoner);
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    getEntries(): Promise<LeagueEntry[]>;
    /**
     * Get the Summoner Array of Masteries.
     * @returns { Promise<LeagueMastery[]> }
     */
    getMasteries(): Promise<LeagueMastery[]>;
    /**
     * Active Match in case the Summoner is in one.
     */
    getActiveGame(): Promise<any>;
}
