import { off } from "process";
import { Handler } from "./Handler";
import { LeagueSummoner } from "./structures/League/Summoner";
import { LeagueMastery } from "./structures/League/Mastery";
import { APILeagueEntry, APILeagueMastery } from "./interfaces/League";
import { LeagueEntry } from "./structures/League/Profile";

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
    constructor( config: any ){
        this.url = "https://" + config.region + API.url;
        this.version = config.version;
        this.token = config.token;
        this.handler = new Handler( 
            { "X-Riot-Token": config.token }
        );
    };

    /**
     * Function to GET the League Summoner Profile.
     * @param { string } name 
     * @returns { Promise<LeagueSummoner> }
     */
    getSummoner( name: string ): Promise<LeagueSummoner> {
        return this.handler._request(
            "GET",
            `${this.url}`,
            `/lol/summoner/v4/summoners/by-name/${name.replace(/ /g,"%20")}`
        ).then((data: any) => new LeagueSummoner(this, data));
    };

    /**
     * 
     * @param { string } id 
     * @returns { Promise<LeagueEntries> }
     */
    getSummonerEntries( id: string ): Promise<LeagueEntry[]> {
        return this.handler._request(
            "GET",
            `${this.url}`,
            `/lol/league/v4/entries/by-summoner/${id}`
        ).then((data: any) => data.map((element: APILeagueEntry) => new LeagueEntry(element)));
    };

    getSummonerMasteries( id: string ): Promise<LeagueMastery[]> {
        return this.handler._request(
            "GET",
            `${this.url}`,
            `/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`
        ).then((data: any) => data.map((element: APILeagueMastery) => new LeagueMastery(this, element)));
    };

    getChampionsList(): Promise<any> {
        return this.handler._request(
            "GET",
            `http://ddragon.leagueoflegends.com`,
            `/cdn/${this.version}/data/de_DE/champion.json`
        );
    };

    getChampion( name: string ): Promise<any> {
        return this.getChampionsList()
        .then((list:any) => {
            const champs = Object.values(list.data);
            return champs.find((champ: any)=> champ.name.toLowerCase() == name.toLowerCase());
        });   
    };
};