import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {CookieService} from 'ngx-cookie-service';
import { AuthinterceptorService } from '../authinterceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : any = {}

  constructor(private _router : Router, private http : HttpClient, private cookieService : CookieService, private authInterceptors : AuthinterceptorService) { }

  ngOnInit() {
    
      // this.authInterceptors.fetchToken()
     
  }

  goToHomePage(){
  this.http.post('http://localhost:2000/login', this.user)
  .subscribe((data: any) =>{
    if(data.loggedIn == true){
      this.cookieService.set('loggedIn', data.loggedIn)
      this.cookieService.set('token', data.token)
      this._router.navigate(['/home']);
    }
    else{
      alert('invalid credentials')
    }
  })
  }

//   checkLogin(){
//     this.http.get('http://localhost:2000/login')
//   .subscribe((data: any) =>{
//     return data.loggedIn
//   })
// }
}
