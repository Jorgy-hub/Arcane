"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueActiveMatch = void 0;
var MatchParticipant_1 = require("./MatchParticipant");
var LeagueActiveMatch = /** @class */ (function () {
    function LeagueActiveMatch(client, region, data) {
        /** Main Data */
        this._client = client;
        this.region = region;
        /** Valid Existance */
        if (!data.gameId)
            throw new Error("No valid Match was sent through the API");
        /** Main Class Values */
        this.gameId = data.gameId;
        this.mapId = data.mapId;
        this.gameMode = data.gameMode;
        this.gameType = data.gameType;
        this.gameQueueConfigId = data.gameQueueConfigId;
        this.participants = data.participants.map(function (participant) { return new MatchParticipant_1.LeagueMatchParticipant(client, region, participant); });
        this.platformId = data.platformId;
        this.bannedChampions = data.bannedChampions;
        this.gameStartTime = data.gameStartTime;
        this.gameLength = data.gameLength;
    }
    ;
    return LeagueActiveMatch;
}());
exports.LeagueActiveMatch = LeagueActiveMatch;
;
