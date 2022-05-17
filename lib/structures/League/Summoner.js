"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSummoner = void 0;
var LeagueSummoner = /** @class */ (function () {
    /**
     * Main Summoner Class.
     * @param { League } client
     * @param { string } region
     * @param { APILeagueSummoner } data
     */
    function LeagueSummoner(client, region, data) {
        /** Main Variables */
        this._client = client;
        this.region = region;
        /** Check if it's a valid account */
        if (!data.id)
            throw new Error("That Summoner wasn't found!");
        /** Main Class Data */
        this.id = data.id;
        this.name = data.name;
        this.accountId = data.accountId;
        this.summonerLevel = data.summonerLevel;
        this.icon = "http://ddragon.leagueoflegends.com/cdn/" + this._client.version + "/img/profileicon/" + data.profileIconId + ".png";
    }
    ;
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    LeagueSummoner.prototype.getEntries = function () {
        return this._client.getSummonerEntries(this.id, this.region);
    };
    ;
    /**
     * Get the Summoner Array of Masteries.
     * @returns { Promise<LeagueMastery[]> }
     */
    LeagueSummoner.prototype.getMasteries = function () {
        return this._client.getSummonerMasteries(this.id, this.region);
    };
    ;
    /**
     * Active Match in case the Summoner is in one.
     */
    LeagueSummoner.prototype.getActiveGame = function () {
        return this._client.getSummonerActiveGame(this.id, this.region);
    };
    ;
    return LeagueSummoner;
}());
exports.LeagueSummoner = LeagueSummoner;
;
