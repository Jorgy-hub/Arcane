import { APILeagueEntry } from "../../interfaces/League";

export class LeagueEntry {
    public leagueId: string;
    public queueType: string;
    public tier: string;
    public rank: string;
    public summonerId: string;
    public summonerName: string;
    public leaguePoints: number;
    public wins: number;
    public losses: number;
    public veteran: boolean;
    public inactive: boolean;
    public freshBlood: boolean;
    public hotStreak: boolean;

    constructor(data: APILeagueEntry){
        this.wins = data.wins;
        this.tier = data.tier;
        this.rank = data.rank;
        this.losses = data.losses;
        this.veteran = data.veteran;
        this.inactive = data.inactive;
        this.leagueId = data.leagueId;
        this.hotStreak = data.hotStreak
        this.queueType = data.queueType;
        this.summonerId = data.summonerId;
        this.freshBlood = data.freshBlood;
        this.summonerName = data.summonerName;
        this.leaguePoints = data.leaguePoints;
    };
};