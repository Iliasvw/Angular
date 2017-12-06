import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RusthuisserviceService } from './rusthuisservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "nl" },
    //otherProviders...
    RusthuisserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
