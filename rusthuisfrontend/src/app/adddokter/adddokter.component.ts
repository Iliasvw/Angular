import { Component, OnInit } from '@angular/core';
import { Dokter } from './dokter.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RusthuisserviceService } from '../rusthuisservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddokter',
  templateUrl: './adddokter.component.html',
  styleUrls: ['./adddokter.component.scss']
})
export class AdddokterComponent implements OnInit {

  public dokterform: FormGroup;
  private _dokter: Dokter;

  constructor(private fb: FormBuilder, private router: Router,
    private _rusthuisservice: RusthuisserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dokterform = this.fb.group({
      naam: ['', [Validators.required]],
      voornaam: ['', [Validators.required]],
      telefoon: ['', [Validators.required]],
      info: ['', []]
    });

    /*let id = this.route.snapshot.params["id"];
    if (id != null)
      this._rusthuisservice.dokterById(id).subscribe(item => {
        this._dokter = item;
        this.veranderFormValues(item);
      });*/
      
    this.route.data.subscribe(item => {
      if(item['dokter'] != null) {
        this._dokter = item['dokter'];
        this.veranderFormValues(item['dokter']);
      }
    });
  }

  onSubmit() {
    if (!this.dokterform.errors) {
      let dokter = new Dokter(this.dokterform.value.voornaam, this.dokterform.value.naam,
        this.dokterform.value.telefoon, this.dokterform.value.info);
      if (this._dokter == null) {
        this._rusthuisservice.addDokter(dokter).subscribe();
      } else {
        dokter.id = this._dokter.id;
        this._rusthuisservice.updateDokter(dokter).subscribe();
      }
      this.router.navigate(['dokters']);
    }
  }

  veranderFormValues(dokter: Dokter) {
    (<FormGroup>this.dokterform).get("naam").setValue(dokter.naam);
    (<FormGroup>this.dokterform).get("voornaam").setValue(dokter.voornaam);
    (<FormGroup>this.dokterform).get("telefoon").setValue(dokter.telefoon);
    (<FormGroup>this.dokterform).get("info").setValue(dokter.info);
  }

  get dokter() {
    return this._dokter;
  }
}
