import { Component, OnInit } from '@angular/core';
import { Dokter } from '../adddokter/dokter.model';
import { RusthuisserviceService } from '../rusthuisservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dokters',
  templateUrl: './dokters.component.html',
  styleUrls: ['./dokters.component.scss']
})
export class DoktersComponent implements OnInit {

  private _dokters: Dokter[];
  public dokterToDelete;
  public searchText = "";

  constructor(private _rusthuisservice: RusthuisserviceService) { }

  ngOnInit() {
    $.getScript('assets/js/animations.js');
    this._rusthuisservice.dokters().subscribe(items => this._dokters = items);
  }

  get dokters () {
    return this._dokters;
  }

  verwijderDokter(dokter: Dokter) {
    let index = this._dokters.indexOf(dokter);
    this._dokters.splice(index, 1);
    this._rusthuisservice.verwijderDokter(dokter.id).subscribe();
  }

  changeDokterToDelete(dokter) {
    this.dokterToDelete = dokter;
  }
}
