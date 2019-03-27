import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
    employees : any[] = [
                          { id : 'emp1', name:'Ashok', age : 23 ,salary: 25000},
                          { id : 'emp2', name:'Raj', age : 22 ,salary: 20000},
                          { id : 'emp1', name:'Bhargav', age : 24 ,salary: 22000},
                          { id : 'emp1', name:'Suresh', age : 22 ,salary: 2000},
                          { id : 'emp1', name:'Sai', age : 24 ,salary: 22000},
                          { id : 'emp1', name:'Pavan', age : 23 ,salary: 25000}
                        ];

}
