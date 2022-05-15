import { APILeagueMastery} from "../../interfaces/League";
import { League } from "../../League";

export class LeagueMastery {
    public championId: number;
    public championLevel: number;
    public championPoints: number;
    public lastPlayTime: number;
    public championPointsSinceLastLevel: number;
    public championPointsUntilNextLevel: number;
    public chestGranted: boolean;
    public tokensEarned: number;
    public summonerId: string;
    public getChampInfo: Function;
    private _client: League;

    constructor(client: League, data: APILeagueMastery){
        this._client = client;
        this.championId = data.championId;
        this.championLevel = data.championLevel;
        this.championPoints = data.championPoints;
        this.lastPlayTime = data.lastPlayTime;
        this.championPointsSinceLastLevel = data.championPointsSinceLastLevel;
        this.championPointsUntilNextLevel = data.championPointsUntilNextLevel;
        this.chestGranted = data.chestGranted;
        this.tokensEarned = data.tokensEarned;
        this.summonerId = data.summonerId;
        this.getChampInfo = async () => {
            const list = await this._client.getChampionsList();
            const champs = Object.values(list.data);
            return champs.find((champ: any)=> champ.key == this.championId);
        }
    };
};