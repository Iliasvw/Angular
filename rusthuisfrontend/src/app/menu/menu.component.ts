import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../user/auth-guard.service';
import { AuthAdminGuardService } from '../user/auth-admin-guard.service';
import { AuthenticationService } from '../user/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthenticationService, private guard: AuthGuardService) { }

  ngOnInit() {
  }

  get currentUser(): Observable<String> {
    return this.authService.user$;
  }
  /*isLoggedIn() {
    return this.guard.isLoggedIn();
  }*/

  /*get isAdmin():  Observable<boolean> {
    return this.authService.admin$;
    //return this.guard.isAdmin();
  }*/

  isAdmin() {
    return this.authService.isAdmin();
  }
}
