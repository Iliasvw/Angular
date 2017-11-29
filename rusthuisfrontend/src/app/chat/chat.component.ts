import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient/patient.model';
import { Message } from './message.model';
import * as $ from 'jquery';
import { FormBuilder, Validators, FormGroup } from '@angular/forms/';
import { AuthenticationService } from '../user/authentication.service';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { Notificatie } from '../notificatiecentrum/notificatie.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private _patient: Patient;
  private _messages: Message[];
  private messageForm: FormGroup;

  constructor(private _route: ActivatedRoute, private fb: FormBuilder,
    private authService: AuthenticationService, private rusthuisService: RusthuisserviceService) {

  }

  ngOnInit() {
    $.getScript('assets/js/animations.js');

    this._route.data.subscribe(item => {
      this._patient = item['patient'];
      this._messages = item['patient'].chat;
    });

    this.messageForm = this.fb.group({
      message: ['', [Validators.required]]
    });
  }

  get patient() {
    return this._patient;
  }

  onSubmit() {
    if (!this.messageForm.errors) {
      let sender = this.authService.isAdmin() ? "VZW Vincenthof" : this._patient.verantwoordelijke.voornaam;
      let message = new Message(sender, this.messageForm.value.message, this._messages.length + 1);
      this.rusthuisService.addMessage(message, this._patient).subscribe(item => {
        this._messages.push(item);

        if(!this.authService.isAdmin()) {
          this.rusthuisService.addNotificatie(
            new Notificatie(`${this._patient.verantwoordelijke.naam} ${this._patient.verantwoordelijke.voornaam} 
            heeft een bericht gestuurd in de chat van bewoner ${this._patient.naam} ${this._patient.voornaam}`
            , this._patient.id.toString())).subscribe();
        }

        $.getScript('assets/js/animations.js');
        (<FormGroup>this.messageForm).get("message").setValue("");
        this.messageForm.reset()
      }
      );
    }
  }

  clearChat() {
    this._patient.chat.splice(0, this._patient.chat.length);
    this.rusthuisService.updatepatient(this._patient).subscribe();
  }

  /*get isAdmin() {
    return this.authService.admin$;
  }*/

  isAdmin() {
    return this.authService.isAdmin();
  }

  get messages() {
    return this._messages;
  }
}
