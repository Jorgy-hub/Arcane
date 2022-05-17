"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
var Handler_1 = require("./Handler");
var Summoner_1 = require("./structures/League/Summoner");
var Mastery_1 = require("./structures/League/Mastery");
var Entry_1 = require("./structures/League/Entry");
var Champion_1 = require("./structures/League/Champion");
var ActiveMatch_1 = require("./structures/League/Match/ActiveMatch");
var API = {
    url: ".api.riotgames.com",
};
var League = /** @class */ (function () {
    /**
     * Main Class for the Tatsu API.
     * @param { any } config
     */
    function League(token, version) {
        this.url = API.url;
        this.version = version;
        this.token = token;
        this.handler = new Handler_1.Handler({ "X-Riot-Token": token });
    }
    ;
    /**
     * Function to GET the League Summoner Profile.
     * @param { string } name
     * @param { string } region
     * @returns { Promise<LeagueSummoner> }
     */
    League.prototype.getSummoner = function (name, region) {
        var _this = this;
        return this.handler._request("GET", "https://" + region + this.url, "/lol/summoner/v4/summoners/by-name/" + name.replace(/ /g, "%20")).then(function (data) { return new Summoner_1.LeagueSummoner(_this, region, data); });
    };
    ;
    /**
     * This Function will get the Ranked Stats of a Summoner.
     * @param { string } id
     * @param { string } region
     * @returns { Promise<LeagueEntries> }
     */
    League.prototype.getSummonerEntries = function (id, region) {
        return this.handler._request("GET", "https://" + region + this.url, "/lol/league/v4/entries/by-summoner/" + id).then(function (data) { return data.map(function (element) { return new Entry_1.LeagueEntry(element); }); });
    };
    ;
    /**
     * This function is used to return the List of Champions Masteries.
     * @param { string }id
     * @param { string } region
     * @returns { Promise<LeagueMastery[]> }
     */
    League.prototype.getSummonerMasteries = function (id, region) {
        var _this = this;
        return this.handler._request("GET", "https://" + region + this.url, "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + id).then(function (data) { return data.map(function (element) { return new Mastery_1.LeagueMastery(_this, element); }); });
    };
    ;
    League.prototype.getSummonerActiveGame = function (id, region) {
        var _this = this;
        return this.handler._request("GET", "https://" + region + this.url, "/lol/spectator/v4/active-games/by-summoner/" + id).then(function (data) { return new ActiveMatch_1.LeagueActiveMatch(_this, region, data); });
    };
    ;
    /**
     * This function is used to get the complete League Champions List.
     * @returns { Promise<any> }
     */
    League.prototype.getChampionsList = function () {
        return this.handler._request("GET", "http://ddragon.leagueoflegends.com", "/cdn/" + this.version + "/data/en_US/champion.json");
    };
    ;
    /**
     * This function is used to search for a Champion by the Name.
     * @param { string } name
     * @returns { Promise<any> }
     */
    League.prototype.getChampionByName = function (name) {
        return this.getChampionsList()
            .then(function (list) {
            var champs = Object.values(list.data);
            return champs.find(function (champ) { return champ.name.toLowerCase() == name.toLowerCase(); });
        }).then(function (champ) { return new Champion_1.LeagueChampion(champ); });
    };
    ;
    /**
     * This function is used to search for a Champion by the ID.
     * @param { number } id
     * @returns { Promise<any> }
     */
    League.prototype.getChampionById = function (id) {
        return this.getChampionsList()
            .then(function (list) {
            var champs = Object.values(list.data);
            return champs.find(function (champ) { return champ.key == id; });
        }).then(function (champ) { return new Champion_1.LeagueChampion(champ); });
    };
    ;
    return League;
}());
exports.League = League;
;
