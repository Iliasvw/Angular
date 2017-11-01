export class Dokter {
    private _voornaam: String;
    private _naam: String;
    private _telefoon: String;
    private _info: String;

    constructor(voornaam: String, naam: String, telefoon: String, info: String){
        this._voornaam = voornaam;
        this._naam = naam;
        this._telefoon = telefoon;
        this._info = info;
    }

    get voornaam() {
        return this._voornaam;
    }

    get naam() {
        return this._naam;
    }

    get telefoon() {
        return this._telefoon;
    }

    get info() {
        return this._info;
    }
}