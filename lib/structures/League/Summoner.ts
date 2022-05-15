import { APILeagueSummoner } from "../../interfaces/League";
import { League } from "../../League";
import { LeagueEntry } from "./Profile";
import { LeagueMastery } from "./Mastery";

export class LeagueSummoner {
    public id: string;
    public name: string;
    public icon: string;
    public getEntries: Function;
    public getMasteries: Function;
    public accountId: string;
    public summonerLevel: number;
    private _client: League;

    /**
     * Main Summoner Class.
     * @param { League } client 
     * @param { APILeagueSummoner } data 
     */
    constructor(client: League, data: APILeagueSummoner){
        this._client = client;
        this.id = data.id;
        this.accountId = data.accountId;
        this.name = data.name;
        this.summonerLevel = data.summonerLevel;
        this.getMasteries = () =>  client.getSummonerMasteries(this.id);
        this.getEntries =  () => client.getSummonerEntries(this.id);
        this.icon = `http://ddragon.leagueoflegends.com/cdn/${this._client.version}/img/profileicon/${data.profileIconId}.png`;
    };
};