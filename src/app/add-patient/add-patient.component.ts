import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import * as $ from 'jquery';
import { Patient } from '../patient/patient.model';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { RusthuisserviceService } from '../rusthuisservice.service';
import { Verantwoordelijke } from '../verantwoordelijke/verantwoordelijke.model';
import { Dokter } from '../adddokter/dokter.model';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  public bewonerForm: FormGroup;
  private _verantwoordelijken: Verantwoordelijke[];
  private _dokters: Dokter[];
  private _bewoner: Patient;

  constructor(private rusthuisService: RusthuisserviceService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    $.getScript('assets/js/animations.js');

    this.bewonerForm = this.fb.group({
      vnaambewoner: ['', [Validators.required]],
      naambewoner: ['', [Validators.required]],
      vnaamverantw: ['', []],
      naamverantw: ['', []],
      medisch: ['', [Validators.required]],
      voeding: ['', [Validators.required]],
      behoeften: ['', [Validators.required]],
      vnaamdokter: ['', []],
      naamdokter: ['', []],
      infodokter: ['', []],
      teldokter: ['', []],
      telverantw: ['', []],
      geboortedatum: ['', [Validators.required]],
      kamer: ['', [Validators.required]],
      verdieping: ['', [Validators.required]],
      checkNieuweVerantw: [false, []],
      checkNieuweDokter: [false, []],
      emailverantw: ['', [], [this.serverSideValidateUsername()]],
      verpleegkundige: ['', [Validators.required]],
      selectVerantw: ['Kies een verantwoordelijke', []],
      selectDokter: ['Kies een dokter', []]
    });

    this.route.data.subscribe(item => {
      if (item['patient'] != null) {
        this._bewoner = item['patient'];
        this.veranderFormValues(item['patient']);
      }
    });

    this.rusthuisService.verantwoordelijken().subscribe(items => {
      this._verantwoordelijken = items;
    });
    this.rusthuisService.dokters().subscribe(items => this._dokters = items);
  }

  onSubmit() {
    let verantw: Verantwoordelijke, dokter: Dokter = null;
    if (this._bewoner == null) {
      if (this.bewonerForm.value.checkNieuweVerantw) {
        verantw = new Verantwoordelijke(this.bewonerForm.value.naamverantw, this.bewonerForm.value.vnaamverantw,
          this.bewonerForm.value.emailverantw, this.bewonerForm.value.telverantw);
      } else {
        verantw = this.bewonerForm.value.selectVerantw;
      }

      if (this.bewonerForm.value.checkNieuweDokter) {
        dokter = new Dokter(this.bewonerForm.value.vnaamdokter, this.bewonerForm.value.naamdokter,
          this.bewonerForm.value.teldokter, this.bewonerForm.value.infodokter);
      } else {
        dokter = this.bewonerForm.value.selectDokter;
      }

      let bewoner = new Patient(this.bewonerForm.value.vnaambewoner, this.bewonerForm.value.naambewoner,
        this.bewonerForm.value.kamer, this.bewonerForm.value.verdieping,
        new Date(this.bewonerForm.value.geboortedatum), this.bewonerForm.value.behoeften,
        this.bewonerForm.value.voeding, this.bewonerForm.value.medisch,
        dokter, verantw, this.bewonerForm.value.verpleegkundige);

      this.rusthuisService.addBewoner(bewoner).subscribe();
      this.bestaatReedsAccount(bewoner.verantwoordelijke.email).subscribe(item => {
        console.log("Bestaat?: " + item);
        if (!item) {
          this.rusthuisService.addUser(bewoner.verantwoordelijke.email, 'password123', false).subscribe();
        }
      })

    } else {
      let bewoner = new Patient(
        this.bewonerForm.value.vnaambewoner, this.bewonerForm.value.naambewoner,
        this.bewonerForm.value.kamer, this.bewonerForm.value.verdieping,
        new Date(this.bewonerForm.value.geboortedatum), this.bewonerForm.value.behoeften,
        this.bewonerForm.value.voeding, this.bewonerForm.value.medisch,
        this.bewonerForm.value.selectDokter,
        this._bewoner.verantwoordelijke,
        this.bewonerForm.value.verpleegkundige,
        this._bewoner.id
      );
      this.rusthuisService.updateBewoner(bewoner).subscribe();
    }
    this.router.navigate(['bewoners']);
  }

  veranderFormValues(bewoner: Patient) {
    (<FormGroup>this.bewonerForm).get("vnaambewoner").setValue(bewoner.voornaam);
    (<FormGroup>this.bewonerForm).get("naambewoner").setValue(bewoner.naam);
    (<FormGroup>this.bewonerForm).get("kamer").setValue(bewoner.kamer);
    (<FormGroup>this.bewonerForm).get("verdieping").setValue(bewoner.verdieping);
    (<FormGroup>this.bewonerForm).get("geboortedatum").setValue(this.transformDate(bewoner.geboortedatum));
    (<FormGroup>this.bewonerForm).get("medisch").setValue(bewoner.medisch);
    (<FormGroup>this.bewonerForm).get("behoeften").setValue(bewoner.specialeBehoeften);
    (<FormGroup>this.bewonerForm).get("voeding").setValue(bewoner.voeding);
    (<FormGroup>this.bewonerForm).get("verpleegkundige").setValue(bewoner.verpleegkundige);
    (<FormGroup>this.bewonerForm).get("selectDokter").setValue(bewoner.dokter);
  }

  get bewoner() {
    return this._bewoner;
  }

  get verantwoordelijken() {
    return this._verantwoordelijken;
  }

  get dokters() {
    return this._dokters;
  }

  transformDate(date) {
    let geb = new Date(date);
    let string = geb.getFullYear() + "-";
    if (geb.getMonth() + 1 < 10) {
      string += "0";
    }
    string += geb.getMonth() + 1 + "-";
    if (geb.getDate() + 1 < 10) {
      string += "0";
    }
    string += geb.getDate();
    return string;
  }

  isEditing() {
    return this._bewoner != null;
  }

  bestaatReedsAccount(email) {
    return this.authService.checkUserNameAvailability(email).map(available => {
      if (available) {
        return false;
      }
      return true;
    })
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authService.checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    };
  }

  byId(item1: Dokter, item2: Dokter) {
    if (item1 == undefined || item2 == undefined)
      return false;
    return item1.id === item2.id;
  }
}
