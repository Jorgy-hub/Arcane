import { Handler } from "./Handler";
import { LeagueSummoner } from "./structures/League/Summoner";
import { LeagueMastery } from "./structures/League/Mastery";
import { APILeagueEntry, APILeagueMastery } from "./interfaces/League";
import { LeagueEntry } from "./structures/League/Entry";
import { LeagueChampion } from "./structures/League/Champion";
import { LeagueActiveMatch } from "./structures/League/Match/ActiveMatch";

const API = {
    url: ".api.riotgames.com",
};

export  class League {
    url: string;
    version: string;
    token: string;
    handler: Handler;

    /**
     * Main Class for the Tatsu API.
     * @param { any } config 
     */
    constructor( token: string, version: string ){
        this.url = API.url;
        this.version = version;
        this.token = token;
        this.handler = new Handler( 
            { "X-Riot-Token": token }
        );
    };

    /**
     * Function to GET the League Summoner Profile.
     * @param { string } name 
     * @param { string } region
     * @returns { Promise<LeagueSummoner> }
     */
    getSummoner( name: string, region: string ): Promise<LeagueSummoner> {
        return this.handler._request(
            "GET",
            `https://${region}${this.url}`,
            `/lol/summoner/v4/summoners/by-name/${name.replace(/ /g,"%20")}`
        ).then((data: any) => new LeagueSummoner(this, region, data));
    };

    /**
     * This Function will get the Ranked Stats of a Summoner.
     * @param { string } id 
     * @param { string } region
     * @returns { Promise<LeagueEntries> }
     */
    getSummonerEntries( id: string, region: string  ): Promise<LeagueEntry[]> {
        return this.handler._request(
            "GET",
            `https://${region}${this.url}`,
            `/lol/league/v4/entries/by-summoner/${id}`
        ).then((data: any) => data.map((element: APILeagueEntry) => new LeagueEntry(element)));
    };

    /**
     * This function is used to return the List of Champions Masteries.
     * @param { string }id 
     * @param { string } region
     * @returns { Promise<LeagueMastery[]> }
     */
    getSummonerMasteries( id: string, region: string  ): Promise<LeagueMastery[]> {
        return this.handler._request(
            "GET",
            `https://${region}${this.url}`,
            `/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`
        ).then((data: any) => data.map((element: APILeagueMastery) => new LeagueMastery(this, element)));
    };

    getSummonerActiveGame( id: string, region: string  ): Promise<any> {
        return this.handler._request(
            "GET",
            `https://${region}${this.url}`,
            `/lol/spectator/v4/active-games/by-summoner/${id}`
        ).then((data: any) => new LeagueActiveMatch(this, region, data));
    };

    /**
     * This function is used to get the complete League Champions List. 
     * @returns { Promise<any> }
     */
    getChampionsList(): Promise<any> {
        return this.handler._request(
            "GET",
            `http://ddragon.leagueoflegends.com`,
            `/cdn/${this.version}/data/en_US/champion.json`
        );
    };

    /**
     * This function is used to search for a Champion by the Name.
     * @param { string } name 
     * @returns { Promise<any> } 
     */
    getChampionByName( name: string ): Promise<any> {
        return this.getChampionsList()
        .then((list:any) => {
            const champs = Object.values(list.data);
            return champs.find((champ: any)=> champ.name.toLowerCase() == name.toLowerCase());
        }).then((champ:any) => new LeagueChampion(champ));   
    };

    /**
     * This function is used to search for a Champion by the ID.
     * @param { number } id 
     * @returns { Promise<any> } 
     */
    getChampionById( id: number ): Promise<any> {
        return this.getChampionsList()
        .then((list:any) => {
            const champs = Object.values(list.data);
            return champs.find((champ: any)=> champ.key == id);
        }).then((champ:any) => new LeagueChampion(champ));   
    };
};