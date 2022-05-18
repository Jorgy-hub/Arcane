import { APILeagueActiveMatchParticipant } from "../../../interfaces/League";
import { League } from "../../../League";
import { LeagueChampion } from "../Champion";
import { LeagueEntry } from "../Entry";
import { LeagueMastery } from "../Mastery";
import { LeagueSummoner } from "../Summoner";
export declare class LeagueMatchParticipant {
    _client: League;
    region: string;
    teamId: number;
    spell1Id: number;
    spell2Id: number;
    championId: number;
    summonerName: string;
    bot: boolean;
    summonerId: string;
    gameCustomizationObjects: any[];
    perks: any[];
    /**
     * Main Class for Matches Players.
     * @param { League } client
     * @param { APILeagueActiveMatchParticipant } data
     */
    constructor(client: League, region: string, data: APILeagueActiveMatchParticipant);
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    getSummoner(): Promise<LeagueSummoner>;
    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    getChampionInfo(): Promise<LeagueChampion>;
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
}
