import { Handler } from "./Handler";
import { LeagueSummoner } from "./structures/League/Summoner";
import { LeagueMastery } from "./structures/League/Mastery";
import { LeagueEntry } from "./structures/League/Entry";
export declare class League {
    url: string;
    version: string;
    token: string;
    handler: Handler;
    /**
     * Main Class for the Tatsu API.
     * @param { any } config
     */
    constructor(token: string, version: string);
    /**
     * Function to GET the League Summoner Profile.
     * @param { string } name
     * @param { string } region
     * @returns { Promise<LeagueSummoner> }
     */
    getSummoner(name: string, region: string): Promise<LeagueSummoner>;
    /**
     * This Function will get the Ranked Stats of a Summoner.
     * @param { string } id
     * @param { string } region
     * @returns { Promise<LeagueEntries> }
     */
    getSummonerEntries(id: string, region: string): Promise<LeagueEntry[]>;
    /**
     * This function is used to return the List of Champions Masteries.
     * @param { string }id
     * @param { string } region
     * @returns { Promise<LeagueMastery[]> }
     */
    getSummonerMasteries(id: string, region: string): Promise<LeagueMastery[]>;
    getSummonerActiveGame(id: string, region: string): Promise<any>;
    /**
     * This function is used to get the complete League Champions List.
     * @returns { Promise<any> }
     */
    getChampionsList(): Promise<any>;
    /**
     * This function is used to search for a Champion by the Name.
     * @param { string } name
     * @returns { Promise<any> }
     */
    getChampionByName(name: string): Promise<any>;
    /**
     * This function is used to search for a Champion by the ID.
     * @param { number } id
     * @returns { Promise<any> }
     */
    getChampionById(id: number): Promise<any>;
}
