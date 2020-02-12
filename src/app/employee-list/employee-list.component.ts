import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ngModuleJitUrl } from '@angular/compiler';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  async ngOnInit() {
    await this._employeeService.getEmployees().then(data => this.employees = data["response"]["games"]);

    this.employees.sort((a,b) => a.name.localeCompare(b.name));
  }
}
