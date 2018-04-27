import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuuthGuard implements CanActivate {
  tok : any = ""
  constructor(private cookieService : CookieService) {
    this.tok = this.cookieService.get('token')
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.tok) {
        console.log(this.tok)
        return true;
      }
      else{
        alert("Ouch!!")
      }
 
  }
}
