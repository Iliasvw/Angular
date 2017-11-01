import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { Verpleegkundige } from '../patient/verpleegkundige.model';

@Component({
  selector: 'app-allebewoners',
  templateUrl: './allebewoners.component.html',
  styleUrls: ['./allebewoners.component.scss']
})
export class AllebewonersComponent implements OnInit {
  private _patienten: Patient[] = new Array<Patient>();
  constructor() {
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
    this._patienten.push(new Patient("Ilias", "Van Wassenhove", 27, 5, "Deze man heeft geen speciale hoeften", "Hij is allergisch voor gluten",
      "Onlangs geopereerd aan de darmen", new Dokter("Stefaan", "Van Baeveghem", "0488 88 88 88", "Werkt enkel 's middags en 's avonds"),
      new Verantwoordelijke("Van Eeckhoute", "Kathleen", "kathleen_jeanpierre@hotmail.com"),
      new Verpleegkundige("De Langhe", "Jan")));
  }

  ngOnInit() {
  }

  get patienten() {
    return this._patienten;
  }
}
