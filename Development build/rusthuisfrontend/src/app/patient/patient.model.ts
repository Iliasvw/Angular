import { Verantwoordelijke } from "../verantwoordelijke/verantwoordelijke.model";
import { Dokter } from '../adddokter/dokter.model'
import { Message } from "../chat/message.model";
export class Patient {
    private _id: Number;
    private _voornaam: String;
    private _naam: String;
    private _kamer: number;
    private _verdieping: number;
    private _verantwoordelijke: Verantwoordelijke;
    private _specialeBehoeften: String;
    private _voeding: String;
    private _medisch: String;
    private _dokter: Dokter;
    private _geboortedatum: Date;
    private _verpleegkundige: String;
    private _chat: Message[];

    constructor(voornaam: String, naam: String, kamer: number, verdieping: number,
        geboortedatum: Date, specialeBehoeften: String, voeding: String, medisch: String, dokter: Dokter,
    verantwoordelijke: Verantwoordelijke, verpleegkundige: String, id?: Number, chat?: Message[]){
        this._id = id;
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
        this._geboortedatum = geboortedatum;
        this._chat = chat;
    }

    get id() {
        return this._id;
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

    set id(id) {
        this._id = id;
    }

    set verantwoordelijke(verantwoordelijke: Verantwoordelijke) {
        this.verantwoordelijke = verantwoordelijke;
    }

    get geboortedatum() {
        return this._geboortedatum;
    }

    get chat() {
        return this._chat;
    }

    toJSON() {
        return {
            _id: this._id,
            naam: this._naam,
            voornaam: this._voornaam,
            specialeBehoeften: this._specialeBehoeften,
            voeding: this._voeding,
            medisch: this._medisch,
            kamer: this._kamer,
            verdieping: this._verdieping,
            geboortedatum: this._geboortedatum,
            verpleegkundige: this._verpleegkundige
        }
    }

    static fromJSON(item): Patient {
        let verantwoordelijke = null;
        let dokter = null;
        if(item.verantwoordelijke) {
            verantwoordelijke = new Verantwoordelijke(item.verantwoordelijke.naam, item.verantwoordelijke.voornaam, 
                item.verantwoordelijke.email, item.verantwoordelijke.telefoon, item.verantwoordelijke._id);
        } else {
            verantwoordelijke = new Verantwoordelijke("", "", "", "");
        }

        if(item.dokter) {
            dokter = new Dokter(item.dokter.voornaam, item.dokter.naam, item.dokter.telefoon, item.dokter.info,
                item.dokter._id);
        } else {
            dokter = new Dokter("", "", "", "");
        }

        let chat = null;
        if(item.chat) {
            chat = item.chat;
        } else {
            chat = new Array<Message>();
        }
        const rec = new Patient(item.voornaam, item.naam, item.kamer,
            item.verdieping, item.geboortedatum, item.specialeBehoeften,
            item.voeding, item.medisch, dokter, verantwoordelijke, 
            item.verpleegkundige, item._id, chat);
        return rec;
    }
}