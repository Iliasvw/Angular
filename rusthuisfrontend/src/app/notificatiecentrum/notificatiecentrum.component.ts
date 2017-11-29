import { Component, OnInit } from '@angular/core';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { Notificatie } from './notificatie.model';

@Component({
  selector: 'app-notificatiecentrum',
  templateUrl: './notificatiecentrum.component.html',
  styleUrls: ['./notificatiecentrum.component.scss']
})
export class NotificatiecentrumComponent implements OnInit {
  private _notificaties: Notificatie[];
  constructor(private rusthuisService: RusthuisserviceService) { }

  ngOnInit() {
    this.rusthuisService.notificaties().subscribe(items => this._notificaties = items);
  }

  get notificaties() {
    return this._notificaties;
  }

  verwijderNotificaties() {
    this.rusthuisService.deletenotificaties().subscribe(item => 
      this._notificaties.splice(0, this._notificaties.length)
    );
  }
}
