import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private _url = '/rusthuis/users';
  private _user$: BehaviorSubject<string>;
  //private _admin$: BehaviorSubject<boolean>;

  public redirectUrl: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(currentUser && currentUser.username);
    //this.adminStatus(currentUser.username).subscribe(item => {
    //    this._admin$ = new BehaviorSubject<boolean>(false);
    //});
  }

  //get admin$(): BehaviorSubject<boolean> {
  //  return this._admin$;
  //}

  isAdmin() {
    if(!localStorage.getItem('currentUser'))
      return false;
    return JSON.parse(localStorage.getItem('currentUser')).isAdmin;
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { username: username, password: password})
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, isAdmin: res.isAdmin, token: token }));
          this._user$.next(username);
          //this._admin$.next(res.isAdmin);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => 
      {
        this._user$.next(null);
        //this._admin$.next(false);
      });
    }
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, isAdmin: res.isAdmin, token: res.token }));
          this._user$.next(username);
          //this._admin$.next(res.isAdmin);
          return true;
        } else {
          return false;
        }
      });
  }

  registerNewAdministrator(username: string, password: string) {
    return this.http.post(`${this._url}/register`, { username: username, password: password });
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username }).map(res => res.json())
    .map(item => {
      if (item.username === 'alreadyexists') {
        return false;
      } else {
        return true;
      }
    });
  }

  /*adminStatus(username) {
    return this.http.post(`${this._url}/admin`, { username: username }).map(res => res.json())
      .map(item => {
        if(item) {
          if(item.isAdmin) 
            return true;
          else {
            return false;
          }
        } else {
          return false;
        }
      })
  }*/
}