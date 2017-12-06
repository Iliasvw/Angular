import { RusthuisserviceService } from "../rusthuisservice.service";
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Verantwoordelijke } from "../verantwoordelijke/verantwoordelijke.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class VerantwoordelijkeResolver implements Resolve<Verantwoordelijke> { 
  constructor(private rusthuisServce: RusthuisserviceService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Verantwoordelijke> {
    return this.rusthuisServce.verantwoordelijkeById(route.params['id']);
  }
}