import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StDirComponent } from './st-dir/st-dir.component';
import { NewTestComponent } from './new-test/new-test.component';
// declares that how many components are used in the app1
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StDirComponent,
    NewTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
