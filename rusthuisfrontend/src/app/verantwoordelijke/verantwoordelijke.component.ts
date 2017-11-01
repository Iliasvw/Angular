import { Component, OnInit, Input } from '@angular/core';
import { Verantwoordelijke } from './verantwoordelijke.model';

@Component({
  selector: 'app-verantwoordelijke',
  templateUrl: './verantwoordelijke.component.html',
  styleUrls: ['./verantwoordelijke.component.scss']
})
export class VerantwoordelijkeComponent implements OnInit {
  @Input() verantwoordelijke: Verantwoordelijke;
  constructor() { }

  ngOnInit() {
  }

}
