import { Component, OnInit } from '@angular/core';
import { RusthuisserviceService } from '../rusthuisservice.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.scss']
})
export class ControlpanelComponent implements OnInit {
  public size: Number = 0;
  constructor(private rusthuisService: RusthuisserviceService) { }

  ngOnInit() {
    this.rusthuisService.notificaties().subscribe(items => 
      this.size = items.length
    );
  }

}
