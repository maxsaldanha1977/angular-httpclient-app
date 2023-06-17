import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  Employee: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Deseja deletar o registro?')) {
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }
}
