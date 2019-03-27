import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
   FirstName:string = "Ashok";
   SecoundName:string = "Kuruba";
   Gender: string = "23";
   Salary : Number = 25000;


}
