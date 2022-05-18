import { APILeagueMastery } from "../../interfaces/League";
import { League } from "../../League";
import { LeagueChampion } from "./Champion";
export declare class LeagueMastery {
    championId: number;
    championLevel: number;
    championPoints: number;
    lastPlayTime: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    tokensEarned: number;
    summonerId: string;
    private _client;
    /**
     * Main Class for a Mastery stored in a Profile.
     * @param { League} client
     * @param { APILeagueMastery } data
     */
    constructor(client: League, data: APILeagueMastery);
    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    getChampInfo(): Promise<LeagueChampion>;
}
