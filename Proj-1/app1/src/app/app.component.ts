import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Amrik';
  // PS Note: How components interact with each other?
  // ans: @input is sent to child component by parent component
  // @output is sent to parent component by child component

 public name = 'Amrik';
}
