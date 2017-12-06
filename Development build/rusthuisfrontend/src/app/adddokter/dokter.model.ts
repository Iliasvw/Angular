export class Dokter {
    private _id: Number
    private _voornaam: String;
    private _naam: String;
    private _telefoon: String;
    private _info: String;

    constructor(voornaam: String, naam: String, telefoon: String, info: String, id?: Number) {
        this._voornaam = voornaam;
        this._naam = naam;
        this._telefoon = telefoon;
        this._info = info;
        this._id = id;
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

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    toJSON() {
        return {
            _id: this._id,
            voornaam: this._voornaam,
            naam: this._naam,
            telefoon: this._telefoon,
            info: this._info
        }
    }

    static fromJSON(item): Dokter {
        const rec = new Dokter(item.voornaam, item.naam, item.telefoon, item.info, item._id)
        return rec;
    }
}