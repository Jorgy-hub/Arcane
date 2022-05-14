import { APITatsuUser } from "../../interfaces/Tatsu";

export class TatsuUser {
    private _data: APITatsuUser;

    constructor(data: APITatsuUser){
        this._data = data;
    }
}