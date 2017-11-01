export class Verpleegkundige {
    private _naam: String;
    private _voornaam: String;

    constructor(naam: String, voornaam: String) {
        this._naam = naam;
        this._voornaam = voornaam;
    }

    get naam() {
        return this._naam;
    }

    get voornaam() {
        return this._voornaam;
    }
}