import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private user: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }
  
    ngOnInit() {
      this.user = this.fb.group({
        username: ['', [Validators.required, Validators.email], 
          this.serverSideValidateUsername()],
        passwordGroup: this.fb.group({
          password: ['', [Validators.required, passwordValidator(12)]],
          confirmPassword: ['', Validators.required]
        }, { validator: comparePasswords })
      });
    }
    
    serverSideValidateUsername(): ValidatorFn {
      return (control: AbstractControl): Observable<{ [key: string]: any }> => {
        return this.authenticationService.checkUserNameAvailability(control.value).map(available => {
          if (available) {
            return null;
          }
          return { userAlreadyExists: true };
        })
      };
    }

    get passwordControl(): FormControl {
      return <FormControl>this.user.get('passwordGroup').get('password');
    }
  
    onSubmit() {
      this.authenticationService.registerNewAdministrator(this.user.value.username, this.passwordControl.value).subscribe(val => {
        if (val) {
          this.router.navigate(['/bewoners']);
        }
      });
    }
}

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': 
      { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
