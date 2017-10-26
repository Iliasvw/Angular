import { Patient } from "../patient/patient.model";

export class Verantwoordelijke {
    private _patienten: Patient[] = new Array<Patient>();
    private _naam: string;
    private _voornaam: string;
    private _email: string;

    constructor(naam: string, voornaam: string, email: string) {
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
    }

    get voornaam(): string {
        return this._voornaam;
    }

    get naam(): string {
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