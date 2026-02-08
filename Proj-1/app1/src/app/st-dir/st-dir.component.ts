import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-st-dir',
  template: `
  
  <!-- structural directives -->
  <h2 *ngIf="false">Amrik is Dutta</h2>
  <!-- or else -->
  <h2 *ngIf="displayName">Amrik is an asshole</h2>
  
  <!-- --------------------------------- -->
  <h2 *ngIf="displayName; else elseBlock">
    Amrik is a good boy</h2>
  <ng-template #elseBlock>
    <h2>
      name is  hidden
    </h2>
  </ng-template>
  

  <!-- -------------------------- -->
<div *ngIf="hue; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>
  <h2>Code with harry</h2>
</ng-template>

<ng-template #elseBlock>
  <h2>Code with tori wilson</h2>
</ng-template>
  
<!-- ------------------------- -->
<!-- ngswitch  directive -->
<div [ngSwitch]="color">
  <div *ngSwitchCase="'blue'">Amrik picked blue</div>
  <div *ngSwitchCase="'green'">Amrik picked green</div>
  <div *ngSwitchCase="'amber'">Amrik picked amber</div>
  <div *ngSwitchDefault>Pick again</div>
</div>
<!-- ------------------------------------------ -->
<!-- ngfor directive -->

<div *ngFor=" let color of clr, first as i">
  <h2>{{i}} {{color}}</h2>
</div>






  `,
  styleUrls: ['./st-dir.component.css']
})
export class StDirComponent implements OnInit {
  public displayName = false;
  public hue = true;
  public color = "blue";
  public clr = ["red","green","blue","bainchyod"];
  constructor() { }

  ngOnInit(): void {
  }

}
