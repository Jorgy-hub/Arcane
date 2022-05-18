import { APILeagueActiveMatch } from "../../../interfaces/League";
import { League } from "../../../League";
import { LeagueMatchParticipant } from "./MatchParticipant";
export declare class LeagueActiveMatch {
    _client: League;
    region: string;
    gameId: number;
    mapId: number;
    gameMode: string;
    gameType: string;
    gameQueueConfigId: number;
    participants: LeagueMatchParticipant[];
    observers: any;
    platformId: string;
    bannedChampions: any[];
    gameStartTime: number;
    gameLength: number;
    constructor(client: League, region: string, data: APILeagueActiveMatch);
}
