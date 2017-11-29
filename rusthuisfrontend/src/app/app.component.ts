import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient/patient.model';
import { Verantwoordelijke } from './verantwoordelijke/verantwoordelijke.model';

@Component({
  selector: 'app-havenapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  patienten: Patient[] = new Array<Patient>();
  verantwoordelijke: Verantwoordelijke;

  constructor() {
    /*this.patienten.push(new Patient("Marie-Louise", "Van Nieuwenhuyse", 1, 1, "", "", ""));
    this.patienten.push(new Patient("Kathleen", "Van Eeckhoute", 2, 1, "", "", ""));
    this.patienten.push(new Patient("Jean-Pierre", "Van Wassenhove", 3, 1, "", "", ""));
    this.patienten.push(new Patient("Jonas", "Van Wassenhove", 4, 1, "", "", ""));
    this.patienten.push(new Patient("Thomas", "Van Wassenhove", 5, 1, "", "", ""));
    this.patienten.push(new Patient("Thias", "Van Wassenhove", 6, 1, "", "", ""));
    this.verantwoordelijke = new Verantwoordelijke("Van Wassenhove", "Ilias", "iliasvw@hotmail.com");
    this.verantwoordelijke.patienten = this.patienten;*/
  }
}
