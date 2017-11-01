import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { VerantwoordelijkeComponent } from './verantwoordelijke/verantwoordelijke.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VerantwoordelijkeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
