import { RusthuisserviceService } from "../rusthuisservice.service";
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Dokter } from "./dokter.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DokterResolver implements Resolve<Dokter> { 
  constructor(private rusthuisServce: RusthuisserviceService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Dokter> {
    return this.rusthuisServce.dokterById(route.params['id']);
  }
}