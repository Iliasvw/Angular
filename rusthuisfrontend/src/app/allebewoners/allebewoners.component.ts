import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { Verpleegkundige } from '../patient/verpleegkundige.model';
import { RusthuisserviceService } from '../rusthuisservice.service';
@Component({
  selector: 'app-allebewoners',
  templateUrl: './allebewoners.component.html',
  styleUrls: ['./allebewoners.component.scss'],
  providers: [RusthuisserviceService]
})
export class AllebewonersComponent implements OnInit {
  private _patienten;
  constructor(private _rusthuisservice: RusthuisserviceService) {
  }

  ngOnInit() {
    this._patienten = this._rusthuisservice.bewoners;
  }

  get patienten() {
    return this._patienten;
  }
}
