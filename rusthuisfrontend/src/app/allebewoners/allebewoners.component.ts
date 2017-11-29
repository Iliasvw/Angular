import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { AuthenticationService } from '../user/authentication.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-allebewoners',
  templateUrl: './allebewoners.component.html',
  styleUrls: ['./allebewoners.component.scss'],
  providers: [RusthuisserviceService]
})
export class AllebewonersComponent implements OnInit {
  private _patienten: Patient[];
  constructor(private _rusthuisservice: RusthuisserviceService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    /*this.authService.admin$.subscribe(item => {
      console.log("Auth log admin:");
      console.log(item);
      if (item) {
        this._rusthuisservice.bewoners().subscribe(items => this._patienten = items);
      } else {
        this._rusthuisservice.verantwoordelijkeByEmail(this.authService.user$.getValue())
          .subscribe(items => this._patienten = items);
      }
    });*/
    if (this.isAdmin()) {
      this._rusthuisservice.bewoners().subscribe(items => this._patienten = items);
    } else {
      this._rusthuisservice.verantwoordelijkeByEmail(this.authService.user$.getValue())
        .subscribe(items => this._patienten = items);
    }
  }

  get patienten() {
    return this._patienten;
  }

  /*get isAdmin(): Observable<boolean> {
    return this.authService.admin$;
  }*/

  isAdmin() {
    return this.authService.isAdmin();
  }
}
