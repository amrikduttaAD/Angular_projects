import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // this timeout is used to change content after some time automatically and is used in constructor
  // constructor(){
  //   setTimeout(() => {
  //     this.title="My app's name changed";
  //   }, 3000);
  }
// }
