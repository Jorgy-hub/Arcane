import { APILeagueChampion, APILeagueChampionInfo, APILeagueChampionStats } from "../../interfaces/League";
export declare class LeagueChampion {
    id: string;
    name: string;
    title: string;
    blurb: string;
    info: APILeagueChampionInfo;
    tags: string[];
    partype: string;
    stats: APILeagueChampionStats;
    /**
     * Main Class for Champions Info.
     * @param { APILeagueChampion } data
     */
    constructor(data: APILeagueChampion);
}
