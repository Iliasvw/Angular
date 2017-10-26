import { Verantwoordelijke } from "../verantwoordelijke/verantwoordelijke.model";

export class Patient {
    private _voornaam: string;
    private _naam: string;
    private _kamer: number;
    private _verdieping: number;
    private _verantwoordelijke: Verantwoordelijke;

    constructor(voornaam: string, naam: string, kamer: number, verdieping: number){
        this._voornaam = voornaam;
        this._naam = naam;
        this._kamer = kamer;
        this._verdieping = verdieping;
    }

    get voornaam(): string {
        return this._voornaam;
    }

    get naam(): string {
        return this._naam;
    }

    get kamer(): number {
        return this._kamer;
    }

    get verdieping(): number {
        return this._verdieping;
    }

    set verantwoordelijke(verantwoordelijke: Verantwoordelijke) {
        this.verantwoordelijke = verantwoordelijke;
    }
}