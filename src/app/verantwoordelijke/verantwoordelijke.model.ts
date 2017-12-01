import { Patient } from "../patient/patient.model";

export class Verantwoordelijke {
    private _id: Number;
    private _patienten: Patient[] = new Array<Patient>();
    private _naam: String;
    private _voornaam: String;
    private _telefoon: String;
    private _email: String;

    constructor(naam: String, voornaam: String, email: String, telefoon: String, id?: Number) {
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
        this._id = id;
        this._telefoon = telefoon;
    }

    get voornaam(): String {
        return this._voornaam;
    }

    get naam(): String {
        return this._naam;
    }

    get patienten() {
        return this._patienten;
    }

    get email() {
        return this._email;
    }

    get id() {
        return this._id;
    }

    set patienten(patienten: Patient[]) {
        this._patienten = patienten;
    }

    get telefoon() {
        return this._telefoon;
    }

    voegPatientToe(patient) {
        this._patienten.push(patient);
    }

    toJSON () {
        return {
            _id: this._id,
            naam: this._naam,
            voornaam: this._voornaam,
            email: this._email,
            telefoon: this._telefoon,
            patienten: this._patienten
        }
    }

    static fromJSON(item): Verantwoordelijke {
        const rec = new Verantwoordelijke(item.naam, item.voornaam,
            item.email, item.telefoon, item._id);

            for(let i = 0; i < item.patienten.length; i++) {
                let patient = item.patienten[i];
                patient.id = patient._id;
            }
            
            rec.patienten = item.patienten;
        return rec;
    }
}