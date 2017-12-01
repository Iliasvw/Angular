import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from '../patient/patient.component';
import { MenuComponent } from '../menu/menu.component';
import { VerantwoordelijkeComponent } from '../verantwoordelijke/verantwoordelijke.component';
import { HomeComponent } from '../home/home.component';
import { AdddokterComponent } from '../adddokter/adddokter.component';
import { AllebewonersComponent } from '../allebewoners/allebewoners.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { AddVerantwoordelijkeComponent } from '../add-verantwoordelijke/add-verantwoordelijke.component';
import { MaterializeModule } from 'angular2-materialize';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ControlpanelComponent } from '../controlpanel/controlpanel.component';
import { DoktersComponent } from '../dokters/dokters.component';
import { DokterFilter } from '../dokterfilter.pipe';
import { PatientResolver } from '../patient/patient.resolver.service';
import { DokterResolver } from '../adddokter/dokter.resolver.service';
import { RegisterComponent } from '../user/register/register.component';
import { LogoutComponent } from '../user/logout/logout.component';
import { AuthenticationService } from '../user/authentication.service';
import { AuthGuardService } from '../user/auth-guard.service';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { LoginComponent } from '../user/login/login.component';
import { AuthAdminGuardService } from '../user/auth-admin-guard.service';
import { VerantwoordelijkeResolver } from '../verantwoordelijke/verantwoordelijke.resolver.service';
import { ChatComponent } from '../chat/chat.component';
import { NotificatiecentrumComponent } from '../notificatiecentrum/notificatiecentrum.component';
import { PatientFilter } from '../patientfilter.pipe';
import { GlobalMessageComponent } from '../chat/global-message/global-message.component';

const appRoutes: Routes = [
  { path: 'verantwoordelijke', component: VerantwoordelijkeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'chat/:id',  canActivate: [ AuthGuardService ], component: ChatComponent, resolve: { patient: PatientResolver}},
  { path: 'bewoner/:id',  canActivate: [ AuthGuardService ], component: PatientComponent, resolve: { patient: PatientResolver}},
  { path: 'verantwoordelijke/:id',  canActivate: [ AuthAdminGuardService ], component: VerantwoordelijkeComponent, resolve: { verantwoordelijke: VerantwoordelijkeResolver}},
  { path: 'bewoners', canActivate: [ AuthGuardService ], component: AllebewonersComponent},
  { path: 'nieuwebewoner', canActivate: [ AuthAdminGuardService ], component: AddPatientComponent},
  { path: 'wijzigbewoner/:id', canActivate: [ AuthAdminGuardService ], component: AddPatientComponent, resolve: { patient: PatientResolver}},
  { path: 'controlepaneel', canActivate: [ AuthAdminGuardService ], component: ControlpanelComponent},
  { path: 'dokters', canActivate: [ AuthAdminGuardService ], component: DoktersComponent},
  { path: 'notificatiecentrum', canActivate: [AuthAdminGuardService], component: NotificatiecentrumComponent },
  { path: 'nieuwedokter', canActivate: [ AuthAdminGuardService ], component: AdddokterComponent},
  { path: 'wijzigdokter/:id', canActivate: [ AuthAdminGuardService ], component: AdddokterComponent, resolve: { dokter: DokterResolver}},
  { path: 'registreer', canActivate: [ AuthAdminGuardService ], component: RegisterComponent},
  { path: 'globaalbericht', canActivate: [ AuthAdminGuardService ], component: GlobalMessageComponent},
  { path: 'logout', component: LogoutComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  declarations: [
    PatientComponent,
    VerantwoordelijkeComponent,
    HomeComponent,
    AdddokterComponent,
    AllebewonersComponent,
    AddPatientComponent,
    AddVerantwoordelijkeComponent,
    PageNotFoundComponent,
    ControlpanelComponent,
    DoktersComponent,
    DokterFilter,
    PatientFilter,
    RegisterComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    NotificatiecentrumComponent,
    GlobalMessageComponent
  ],
  exports : [
    RouterModule
  ],

  providers: [
    AuthenticationService,
    AuthGuardService,
    AuthAdminGuardService,
    PatientResolver,
    DokterResolver,
    VerantwoordelijkeResolver
  ]
})
export class AppRoutingModule { }
