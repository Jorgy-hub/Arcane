import { APILeagueChampion, APILeagueChampionInfo, APILeagueChampionStats } from "../../interfaces/League";

export class LeagueChampion {
    public id: string;
    public name: string;
    public title: string;
    public blurb: string;
    public info: APILeagueChampionInfo;
    public tags: string[];
    public partype: string;
    public stats: APILeagueChampionStats;

    /**
     * Main Class for Champions Info.
     * @param { APILeagueChampion } data 
     */
    constructor(data: APILeagueChampion) {
        /** Check Validance */
        if(!data.id)
            throw new Error("Could not find that Champion");

        /** Main Balues */
        this.id = data.key;
        this.name = data.name;
        this.title = data.title;
        this.blurb = data.blurb;
        this.info = data.info;
        this.tags = data.tags;
        this.partype = data.partype;
        this.stats = data.stats;   
    };
};