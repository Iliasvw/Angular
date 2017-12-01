import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {

  private _bewoner: Patient;
  private _id: Number;

  constructor(private _rusthuisservice: RusthuisserviceService,
  private _route: ActivatedRoute, private authService: AuthenticationService) {
  }

  ngOnInit() {
    //this._route.paramMap.subscribe(item => 
    //  this._id = item.get('id'));
    //this._id = this._route.snapshot.params.id;
    //this._rusthuisservice.bewonerById(this._id).subscribe(val => this._bewoner = val);
    this._route.data.subscribe(item => { 
      this._bewoner = item['patient'];
      console.log(item['patient'].dokter);
    });
  }

  get bewoner() {
    return this._bewoner;
  }

  get id() {
    return this._id;
  }

  /*get isAdmin(): Observable<boolean> {
    return this.authService.admin$;
  }*/

  isAdmin() {
    return this.authService.isAdmin();
  }
}
