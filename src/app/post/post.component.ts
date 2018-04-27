import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  obj : any = []
  newdata : any 

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:2000/home')
    .subscribe((data: any) =>{
      if(data){
        console.log(data)
          this.obj = data
          this.newdata = JSON.stringify(data)
      }
  }

    )}
    senddata(data)
{
console.log(data)
}
}
