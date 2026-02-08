import { Component, OnInit } from '@angular/core';

@Component({
 // there are 3 ways to declare component name or selector
 // selector: 'app-test',(normal) -----1
 //selector: '.app-test',(by class format)-----2
 //selector: '[app-test]',(by [])-----3
 selector: 'app-test',

 //we can also  use  inline html instead of using url in both html and css
 // templateUrl: './test.component.html',
  //template: '<div>hue hue hue</div>',--single line
  /*template: `<div>
  hye hue hue
</div>`,---multi line  must use backtick*/
template: `<h2>
welcome {{name}}
</h2>
<h2>2+2</h2>
<h2>{{"Welcome to "+name}}</h2>
<h2>{{name.length}}</h2>
<h2>{{name.toUpperCase()}}
<h2>{{greetUser()}}</h2>
<!-- class binding -->
<h2 class="text-success text-special">Hero hai mera beta</h2>
<h2 [class]="success">Hero hai laude pe</h2>

<h2 [ngClass]="obj">Hero hoga mera beta</h2>

<!-- style binding -->
<h2 [style.color]="'orange'">style marta hai chadarmod</h2>
<h2 [style.color]="hasError? 'red' : 'green'">style marne ka naya technique</h2>
<h2 [style.color]="highlight">hue hue hue</h2>

<h2 [ngStyle]="titleStyles">directives are best</h2>
<!-- we can assign any property to a class like this to help toggling -->
<h2 [class.text-danger] ="hasError" >Hero hai mera beta</h2>

<!-- property binding -->
<input [id]="myId" type="text" value="Amrik">
<input [disabled]="isDisabled" id="{{myId}}" type="text" value="Amrik">

<!-- event binding -->
<button (click)="onClick()">Greet</button>
{{greeting}}
<button (click)="greeting='welcumm'">Greet</button>


<!-- two way binding -->
<input #logUser type="text">
<button (click)="logMessage(logUser.value)">log</button>

<!-- using ngmodel  two way binding-->
<input [(ngModel)]="name" type="text">
{{name}}

`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name = "Amrik";
public myId = "testId";
public isDisabled = true;
//class binding
public success = "text-success";
public hasError = false;
public isSpecial = true;
// used in ngclass directive
public obj ={
      "text-success":!this.hasError,
      "text-danger":this.hasError,
      "text-special":this.isSpecial

}
public highlight = "violet";
// used  in ngstyle  directive
public titleStyles = {
  color:"blue",
  fontStyle:"italic"
}
public greeting = "";
onClick(){
  console.log("Welcome to my dick");
  this.greeting = "Welcome to my pussy";
}


  constructor() { }

  ngOnInit(): void {
  }


  greetUser(){
    return "Helllo "+this.name;
  }

logMessage(value: any){
  console.log(value);
}


}
