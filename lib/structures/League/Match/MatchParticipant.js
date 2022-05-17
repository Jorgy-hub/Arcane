"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueMatchParticipant = void 0;
var LeagueMatchParticipant = /** @class */ (function () {
    /**
     * Main Class for Matches Players.
     * @param { League } client
     * @param { APILeagueActiveMatchParticipant } data
     */
    function LeagueMatchParticipant(client, region, data) {
        /** Main Data */
        this._client = client;
        this.region = region;
        /** Valid Existance */
        if (!data.summonerId)
            throw new Error("No Summoner Id was given in the Participant API Error");
        /** Main Class Values */
        this.summonerId = data.summonerId;
        this.summonerName = data.summonerName;
        this.bot = data.bot;
        this.championId = data.championId;
        this.teamId = data.teamId;
        this.spell1Id = data.spell1Id;
        this.spell2Id = data.spell2Id;
        this.gameCustomizationObjects = data.gameCustomizationObjects;
        this.perks = data.perks;
    }
    ;
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    LeagueMatchParticipant.prototype.getSummoner = function () {
        return this._client.getSummoner(this.summonerName, this.region);
    };
    ;
    /**
     * Returns the League Champion Class with it's info, stats, etc...
     * @returns { LeagueChampion }
     */
    LeagueMatchParticipant.prototype.getChampionInfo = function () {
        return this._client.getChampionById(this.championId);
    };
    ;
    /**
     * Get the Ranked Stats of the Summoner.
     * @returns { Promise<LeagueEntry[]> }
     */
    LeagueMatchParticipant.prototype.getEntries = function () {
        return this._client.getSummonerEntries(this.summonerId, this.region);
    };
    ;
    /**
     * Get the Summoner Array of Masteries.
     * @returns { Promise<LeagueMastery[]> }
     */
    LeagueMatchParticipant.prototype.getMasteries = function () {
        return this._client.getSummonerMasteries(this.summonerId, this.region);
    };
    ;
    return LeagueMatchParticipant;
}());
exports.LeagueMatchParticipant = LeagueMatchParticipant;
;
