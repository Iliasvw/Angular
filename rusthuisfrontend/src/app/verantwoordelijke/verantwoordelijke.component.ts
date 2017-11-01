import { Component, OnInit, Input } from '@angular/core';
import { Verantwoordelijke } from './verantwoordelijke.model';
import { Patient } from '../patient/patient.model';
import { Dokter } from '../adddokter/dokter.model';
import { Verpleegkundige } from '../patient/verpleegkundige.model';

@Component({
  selector: 'app-verantwoordelijke',
  templateUrl: './verantwoordelijke.component.html',
  styleUrls: ['./verantwoordelijke.component.scss']
})
export class VerantwoordelijkeComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit() {
  }

}
