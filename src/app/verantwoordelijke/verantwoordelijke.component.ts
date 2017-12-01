import { Component, OnInit, Input } from '@angular/core';
import { Verantwoordelijke } from './verantwoordelijke.model';
import { Patient } from '../patient/patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verantwoordelijke',
  templateUrl: './verantwoordelijke.component.html',
  styleUrls: ['./verantwoordelijke.component.scss']
})
export class VerantwoordelijkeComponent implements OnInit {
  private _verantw: Verantwoordelijke;
  constructor(private _route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this._route.data.subscribe(item =>
      this._verantw = item['verantwoordelijke']
    );
  }

  get verantwoordelijke() {
    return this._verantw;
  }

}
