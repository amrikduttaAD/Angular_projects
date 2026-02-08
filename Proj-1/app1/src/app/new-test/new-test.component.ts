import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-new-test',
  template: `
  <h2 class="tt">
  {{"Hello " + parentData}}
  {{"Hello " + name}}


  </h2>
  
  
  
  
  `,
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  @Input() public parentData: any;
  // another way to input data from parent to child component
  @Input('parentData') public name: any;

// now I am sending data from child to parent component
// we have to use event to send data to parent




  constructor() { }

  ngOnInit(): void {
  }

}
