import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja';

  ninja1 = {
    name: 'Ryu',
    belt: 'Red'
  }

  yell(e){
    alert("I am yelling...")
    console.log(e)
  }
}
