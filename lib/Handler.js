"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
var undici_1 = require("undici");
var Handler = /** @class */ (function () {
    function Handler(globals) {
        this.queue = [];
        this.limit = 60;
        this.remaining = 60;
        this.localRemaining = 60;
        this.reset = Date.now();
        this.headers = globals;
    }
    ;
    /**
     * This is an Individual Request it will auto add into the Queue.
     * @param { string } method
     * @param { string } url
     * @param { any } data
     * @return { Promise<T> }
     */
    Handler.prototype._request = function (method, url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var latest = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this._executeRequest(method, url, data)
                            .then(resolve, reject)];
                });
            }); };
            _this.queue.push(latest);
            _this._runQueue();
        });
    };
    ;
    Handler.prototype._runQueue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var processes, timestamp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Finished with the requests.
                        if (this.queue.length === 0)
                            return [2 /*return*/];
                        if (!(this.localRemaining > 0)) return [3 /*break*/, 2];
                        processes = this.queue.splice(0, this.localRemaining);
                        this.localRemaining -= processes.length;
                        return [4 /*yield*/, Promise.allSettled(processes.map(function (individualProcess) { return individualProcess(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        ;
                        timestamp = this.reset - Date.now();
                        setTimeout(function () {
                            _this._runQueue();
                        }, timestamp);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * This function will execute each individual Request.
     * @param { string } method
     * @param { string } url
     * @param { any } body
     * @returns { Promise<T> }
     */
    Handler.prototype._executeRequest = function (method, url, body) {
        var _this = this;
        return new Promise(function (complete, reject) {
            var req = (0, undici_1.request)(url, Object.assign({ method: method, headers: __assign({}, _this.headers) })).then(function (res) {
                if (res.statusCode == 200) {
                    _this.remaining = Number(res.headers["x-ratelimit-remaining"]);
                    _this.limit = Number(res.headers["x-ratelimit-limit"]);
                    _this.reset = new Date(Number(res.headers["x-ratelimit-reset"]) * 1000).getTime();
                    complete(res.body);
                }
                else
                    reject(Object.assign({ statusCode: res.statusCode, error: res.body }));
            });
        });
    };
    ;
    return Handler;
}());
exports.Handler = Handler;
;
