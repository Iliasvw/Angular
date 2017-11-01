import { Verantwoordelijke } from "../verantwoordelijke/verantwoordelijke.model";
import { Dokter } from '../adddokter/dokter.model'
import { Verpleegkundige } from './verpleegkundige.model';
export class Patient {
    private _voornaam: String;
    private _naam: String;
    private _kamer: number;
    private _verdieping: number;
    private _verantwoordelijke: Verantwoordelijke;
    private _specialeBehoeften: String;
    private _voeding: String;
    private _medisch: String;
    private _dokter: Dokter;
    private _verpleegkundige: Verpleegkundige;

    constructor(voornaam: String, naam: String, kamer: number, verdieping: number,
    specialeBehoeften: String, voeding: String, medisch: String, dokter: Dokter,
    verantwoordelijke: Verantwoordelijke, verpleegkundige: Verpleegkundige){
        this._voornaam = voornaam;
        this._naam = naam;
        this._kamer = kamer;
        this._verdieping = verdieping;
        this._specialeBehoeften = specialeBehoeften;
        this._voeding = voeding;
        this._medisch = medisch;
        this._dokter = dokter;
        this._verantwoordelijke = verantwoordelijke;
        this._verpleegkundige = verpleegkundige;
    }

    get voornaam(): String {
        return this._voornaam;
    }

    get naam(): String {
        return this._naam;
    }

    get specialeBehoeften(): String {
        return this._specialeBehoeften;
    }

    get voeding(): String {
        return this._voeding;
    }

    get medisch(): String {
        return this._medisch;
    }

    get kamer(): number {
        return this._kamer;
    }

    get verdieping(): number {
        return this._verdieping;
    }

    get dokter() {
        return this._dokter;
    }

    get verantwoordelijke() {
        return this._verantwoordelijke;
    }

    get verpleegkundige() {
        return this._verpleegkundige;
    }

    set verantwoordelijke(verantwoordelijke: Verantwoordelijke) {
        this.verantwoordelijke = verantwoordelijke;
    }
}