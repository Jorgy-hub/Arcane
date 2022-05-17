"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueEntry = void 0;
var LeagueEntry = /** @class */ (function () {
    function LeagueEntry(data) {
        this.wins = data.wins;
        this.tier = data.tier;
        this.rank = data.rank;
        this.losses = data.losses;
        this.veteran = data.veteran;
        this.inactive = data.inactive;
        this.leagueId = data.leagueId;
        this.hotStreak = data.hotStreak;
        this.queueType = data.queueType;
        this.summonerId = data.summonerId;
        this.freshBlood = data.freshBlood;
        this.summonerName = data.summonerName;
        this.leaguePoints = data.leaguePoints;
    }
    ;
    return LeagueEntry;
}());
exports.LeagueEntry = LeagueEntry;
;
