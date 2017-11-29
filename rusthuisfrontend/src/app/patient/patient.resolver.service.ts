import { RusthuisserviceService } from "../rusthuisservice.service";
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Patient } from "./patient.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PatientResolver implements Resolve<Patient> { 
  constructor(private rusthuisServce: RusthuisserviceService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Patient> {
    return this.rusthuisServce.bewonerById(route.params['id']);
  }
}