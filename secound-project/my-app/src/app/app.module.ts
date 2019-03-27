import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ChildComponent,
    ParentComponent,
    SiblingComponent,
    HomeComponent,
    FormsComponent    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
