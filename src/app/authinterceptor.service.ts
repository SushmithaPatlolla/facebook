import { Injectable } from '@angular/core';
import {HttpInterceptor , HttpHeaders} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {
tok : any = ""
  constructor(private cookieService : CookieService) {
    this.tok = this.cookieService.get('token')
    console.log('tok in constructor', this.tok)
  }
  // fetchToken(`token`){
  //   this.tok = token
  //   console.log("token",token);
  //     }
    intercept(req, next){
      var authRequest = req.clone({
        headers: new HttpHeaders().set('authorize', this.tok )
      })
      return next.handle(authRequest)
    }

}
