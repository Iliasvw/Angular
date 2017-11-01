import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { Verpleegkundige } from './verpleegkundige.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {

  private _bewoner: Patient;

  constructor() { 
    this._bewoner = new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten", 
    "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
  new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
  new Verpleegkundige("De Langhe", "Jan"));
  }

  ngOnInit() {
  }

  get bewoner() {
    return this._bewoner;
  }
}
