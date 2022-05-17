"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueMastery = void 0;
var LeagueMastery = /** @class */ (function () {
    /**
     * Main Class for a Mastery stored in a Profile.
     * @param { League} client
     * @param { APILeagueMastery } data
     */
    function LeagueMastery(client, data) {
        /** Main Data. */
        this._client = client;
        /** Check if the information is valid. */
        if (!data.championId)
            throw new Error("No champions was given!");
        /** Main Mastery Structure. */
        this.championId = data.championId;
        this.championLevel = data.championLevel;
        this.championPoints = data.championPoints;
        this.lastPlayTime = data.lastPlayTime;
        this.championPointsSinceLastLevel = data.championPointsSinceLastLevel;
        this.championPointsUntilNextLevel = data.championPointsUntilNextLevel;
        this.chestGranted = data.chestGranted;
        this.tokensEarned = data.tokensEarned;
        this.summonerId = data.summonerId;
    }
    ;
    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    LeagueMastery.prototype.getChampInfo = function () {
        return this._client.getChampionById(this.championId);
    };
    ;
    return LeagueMastery;
}());
exports.LeagueMastery = LeagueMastery;
;
