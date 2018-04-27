import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
valuetext : any 
  @Input() post : any
  @Output() value : EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  
  }

  display(val){
      this.value.emit(val)
  }
  send(){
   this.value.emit(this.valuetext)
  }
}
