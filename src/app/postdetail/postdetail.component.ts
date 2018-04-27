import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  singlePost : any
  constructor(private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.singlePost = this.activatedRoute.snapshot.params['title']
    console.log(this.singlePost)
  }

}
