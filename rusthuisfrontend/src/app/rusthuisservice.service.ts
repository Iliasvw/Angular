import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Patient } from './patient/patient.model';
import { Verantwoordelijke } from './verantwoordelijke/verantwoordelijke.model';
import { Dokter } from './adddokter/dokter.model';
import { Verpleegkundige } from './patient/verpleegkundige.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RusthuisserviceService {
  private _appUrl = 'http://localhost:4200/rusthuis/';
  constructor(private http: Http) { }

  get bewoners(): Observable<Patient[]> {
    return this.http.get(this._appUrl + "bewoners").map(response =>
      response.json().map(item =>
        new Patient(item._id, item.voornaam, item.naam, item.kamer,
          item.verdieping, item.geboortedatum, item.specialeBehoeften,
          item.voeding, item.medisch, new Dokter("Stefaan", "Van Baeveghem", "04 88 88 88 88", "Werkt niet 's avonds"),
          new Verantwoordelijke("", "", ""), new Verpleegkundige("", ""))));
  }

  bewonerById(id: Number): Observable<Patient> {
    return this.http.get(this._appUrl + "bewoner/"+id).map(res => {console.log(res); return res.json()}).map(item => {
      console.log(item._id);
      return new Patient(item._id, item.voornaam, item.naam, item.kamer,
        item.verdieping, item.geboortedatum, item.specialeBehoeften,
        item.voeding, item.medisch, new Dokter("Stefaan", "Van Baeveghem", "04 88 88 88 88", "Werkt niet 's avonds"),
        new Verantwoordelijke("Van Wassenhove", "Ilias", "ivw@hotmail.com"), new Verpleegkundige("Van Wassenhove", "Thomas"))});
  }
}
