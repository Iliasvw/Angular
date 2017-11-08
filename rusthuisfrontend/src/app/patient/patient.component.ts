import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { Verpleegkundige } from './verpleegkundige.model';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [RusthuisserviceService]
})
export class PatientComponent implements OnInit {

  private _bewoner;
  private _id: Number;

  constructor(private _rusthuisservice: RusthuisserviceService,
  private _route: ActivatedRoute) {
    /*this._bewoner = new Patient(1, "Ilias", "Van Wassenhove", 27, 5, new Date(), "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten", 
    "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
  new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
  new Verpleegkundige("De Langhe", "Jan"));*/
  }

  ngOnInit() {
    this._id = this._route.snapshot.params.id;
    this._rusthuisservice.bewonerById(this._id).subscribe(val => this._bewoner = val);
  }

  get bewoner() {
    return this._bewoner;
  }
}
