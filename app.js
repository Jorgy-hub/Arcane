"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueClient = void 0;
/** League of Legends API */
__exportStar(require("./lib/interfaces/League"), exports);
__exportStar(require("./lib/structures/League/Match/ActiveMatch"), exports);
__exportStar(require("./lib/structures/League/Match/MatchParticipant"), exports);
__exportStar(require("./lib/structures/League/Champion"), exports);
__exportStar(require("./lib/structures/League/Entry"), exports);
__exportStar(require("./lib/structures/League/Mastery"), exports);
__exportStar(require("./lib/structures/League/Summoner"), exports);
__exportStar(require("./lib/Handler"), exports);
__exportStar(require("./lib/League"), exports);
var League_1 = require("./lib/League");
Object.defineProperty(exports, "LeagueClient", { enumerable: true, get: function () { return League_1.League; } });
