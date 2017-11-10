import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[LoggingService]
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {name:"Yoshi", belt: "Black"},
    {name:"Ryu", belt: "Red"},
    {name:"Crystal", belt: "Purple"}
  ];

  constructor(private logger: LoggingService) {

  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {

  }

}
