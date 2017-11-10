import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoggingService} from '../logging.service';

@Component({
  inputs: ['ninja1'],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]

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

  constructor(private logger: LoggingService) {

  }

 logIt(){
   this.logger.log();
 }

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
