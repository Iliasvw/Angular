import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms/';
import { RusthuisserviceService } from '../../rusthuisservice.service';
import { Message } from '../message.model';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit {
  public message;
  constructor(private fb: FormBuilder, private rusthuisService: RusthuisserviceService,
  private router: Router) { }

  ngOnInit() {
    this.message = this.fb.group({
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    let message = new Message("VZW Vincenthof", this.message.value.message);
    this.rusthuisService.globalMessage(message).subscribe(item => 
      this.router.navigate(['controlepaneel'])
    );
  }
}
