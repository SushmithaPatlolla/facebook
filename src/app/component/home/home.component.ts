import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import {ButtonComponent} from '../button/button.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post : any = {}
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit() {

  }

  submit(){
   this.http.post('http://localhost:2000/home', this.post)
   .subscribe((data: any) =>{
    if(data){
   this.router.navigate(['/home/post'])
    }
  })
  }

  catchvalue(value){
  this.post.title = value
  }

}
