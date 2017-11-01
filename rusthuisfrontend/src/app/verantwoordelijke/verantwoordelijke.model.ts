import { Patient } from "../patient/patient.model";

export class Verantwoordelijke {
    private _patienten: Patient[] = new Array<Patient>();
    private _naam: String;
    private _voornaam: String;
    private _email: String;

    constructor(naam: String, voornaam: String, email: String) {
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
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

    set patienten(patienten: Patient[]) {
        this._patienten = patienten;
    }

    voegPatientToe(patient: Patient) {
        this._patienten.push(patient);
    }
}