import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from '';
import 'rxjs/add/operator/map';
import { Patient } from './patient/patient.model';
import { Verantwoordelijke } from './verantwoordelijke/verantwoordelijke.model';
import { Dokter } from './adddokter/dokter.model';
import { AuthenticationService } from './user/authentication.service';
import { Message } from './chat/message.model';
import { Notificatie } from './notificatiecentrum/notificatie.model';

@Injectable()
export class RusthuisserviceService {
  private _appUrl = 'https://rocky-brushlands-65366.herokuapp.com/rusthuis/';
  private _headers = new Headers({ Authorization: `Bearer ${this.auth.token}` })
  constructor(private http: Http, private auth: AuthenticationService) { }

  bewoners(): Observable<Patient[]> {
    return this.http.get(this._appUrl + "bewoners", { headers: this._headers })
      .map(response => response.json().map(item =>
        Patient.fromJSON(item)));
  }

  bewonerById(id: Number): Observable<Patient> {
    return this.http.get(this._appUrl + "bewoner/" + id, { headers: this._headers }).map(res => res.json()).map(item => {
      return Patient.fromJSON(item);
    });
  }

  addDokter(dokter): Observable<Dokter> {
    return this.http.post(this._appUrl + "adddokter", dokter, { headers: this._headers })
      .map(res => res.json()).map(item =>
        Dokter.fromJSON(item));
  }

  dokters() {
    return this.http.get(this._appUrl + "dokters", { headers: this._headers }).map(res =>
      res.json().map(item =>
        Dokter.fromJSON(item)
      ));
  }

  verwijderDokter(id) {
    return this.http.delete(this._appUrl + "verwijderdokter/" + id, { headers: this._headers }).map(res => res.json());
  }

  dokterById(id): Observable<Dokter> {
    return this.http.get(this._appUrl + "dokter/" + id, { headers: this._headers }).map(res => { return res.json() }).map(item =>
      Dokter.fromJSON(item));
  }

  updateDokter(dokter) {
    return this.http.put(this._appUrl + "updatedokter/" + dokter.id, dokter, { headers: this._headers });
  }

  addpatient(patient) {
    return this.http.post(this._appUrl + "addbewoner/", patient, { headers: this._headers }).map(res => res.json())
      .map(item => Patient.fromJSON(item));
  }

  verantwoordelijken() {
    return this.http.get(this._appUrl + "verantwoordelijken", { headers: this._headers }).map(res => res.json()
      .map(items => {
        console.log(items);
        return Verantwoordelijke.fromJSON(items)}
      ));
  }

  verantwoordelijkeById(id): Observable<Verantwoordelijke> {
    return this.http.get(this._appUrl + "verantwoordelijke/" + id, { headers: this._headers }).map(res => { return res.json() }).map(item =>
      Verantwoordelijke.fromJSON(item));
  }

  /*addVerantwoordelijke(verantw: Verantwoordelijke, patient: Patient) {
    return this.http.post(`${this._appUrl}bewoner/${patient.id}/verantwoordelijke`, { pat: patient, verantw: verantw, patienten: verantw.patienten }, { headers: this._headers });
  }*/

  addMessage(message: Message, patient: Patient) {
    return this.http.post(`${this._appUrl}bewoner/${patient.id}/message`, { pat: patient, message: message }, { headers: this._headers })
      .map(res => res.json()).map(item => new Message(item.sender, item.content, item.messageId));
  }

  updatepatient(patient) {
    return this.http.put(this._appUrl + "updatebewoner/" + patient.id, patient, { headers: this._headers })
      .map(res => res.json()).map(item => Patient.fromJSON(item));
  }

  /*voegDokterToeAanPatient(dokter: Dokter, patient: Patient) {
    return this.http.post(`${this._appUrl}bewoner/${patient.id}/dokter`, { dk: dokter }, { headers: this._headers });
  }*/

  addUser(username, password, isAdmin) {
    return this.http.post('/rusthuis/users/register', { username: username, isAdmin: isAdmin, password: password });
  }

  addNotificatie(notificatie): Observable<Notificatie> {
    return this.http.post(this._appUrl + "addnotificatie", { not: notificatie, id: notificatie.patientid }, { headers: this._headers })
      .map(res => res.json()).map(item =>
        new Notificatie(item.message, item.patientid, item.date));
  }

  notificaties(): Observable<Notificatie[]> {
    return this.http.get(this._appUrl + "notificaties", { headers: this._headers })
      .map(response => response.json().map(item =>
        new Notificatie(item.message, item.patientid, item.date)));
  }

  deletenotificaties() {
    return this.http.delete(this._appUrl + "deletenotificaties", { headers: this._headers });
  }

  verantwoordelijkeByEmail(email) {
    return this.http.get(this._appUrl + 'verantwoordelijkebyemail/' + email, { headers: this._headers })
      .map(res => res.json().map(item => {
        return Patient.fromJSON(item);
      }
      ));
  }

  addBewoner(pat) {
    return this.http.post(this._appUrl + "bewoner", { patient: pat, verantw: pat.verantwoordelijke, dokter: pat.dokter }, { headers: this._headers })
  }

  updateBewoner(pat) {
    return this.http.put(this._appUrl + "updatebewoner", { patient: pat, dokter: pat.dokter }, { headers: this._headers })
    .map(res => res.json()).map(item => Patient.fromJSON(item));
  }

  globalMessage(message) {
    return this.http.post(this._appUrl + "globalMessage", message, { headers: this._headers });
  }
}
