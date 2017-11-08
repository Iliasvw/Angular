import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { VerantwoordelijkeComponent } from './verantwoordelijke/verantwoordelijke.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdddokterComponent } from './adddokter/adddokter.component';
import { AllebewonersComponent } from './allebewoners/allebewoners.component';
import { HttpModule } from '@angular/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddVerantwoordelijkeComponent } from './add-verantwoordelijke/add-verantwoordelijke.component';
import { LOCALE_ID } from '@angular/core';

const appRoutes: Routes = [
  //{ path: 'bewoners', component: CrisisListComponent }
  { path: 'verantwoordelijke', component: VerantwoordelijkeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: 'bewoner/:id', component: PatientComponent},
  { path: 'bewoners', component: AllebewonersComponent},
  { path: 'nieuwebewoner', component: AddPatientComponent},
  { path: 'wijzigbewoner/:id', component: AddPatientComponent}
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VerantwoordelijkeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdddokterComponent,
    AllebewonersComponent,
    AddPatientComponent,
    AddVerantwoordelijkeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "nl" }
    //otherProviders...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
