import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  inputs: ['ninja1'],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the home page..."
  myString = "I like angular"
  myBoolean = true

  @Output() onYell = new EventEmitter()

  ninja = {
   name: "Yoshi",
   belt: "Black"
 };

  constructor() { }

  ngOnInit() {
  }

  alertMe(){
    alert("hey there!!!")
  }

  alertMe2(msg){
    alert(msg)
  }

  fireYellEvent(e){
    this.onYell.emit(e);
  }

}
