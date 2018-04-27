import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any ={}
  
  constructor(private router : Router, private http : HttpClient) { }

  ngOnInit() {
  }
  goToLogin(){
    this.http.post('http://localhost:2000/register', this.user)
    .subscribe((data : any) =>{
      console.log(data)
    })
       this.router.navigate(['/login'])
  }



}
