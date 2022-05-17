"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueChampion = void 0;
var LeagueChampion = /** @class */ (function () {
    /**
     * Main Class for Champions Info.
     * @param { APILeagueChampion } data
     */
    function LeagueChampion(data) {
        /** Check Validance */
        if (!data.id)
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
    }
    ;
    return LeagueChampion;
}());
exports.LeagueChampion = LeagueChampion;
;
