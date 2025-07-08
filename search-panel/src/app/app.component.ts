import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from './core/services/employee.service';
import { DataTableComponent } from './features/data-table/data-table.component';
import { SearchPanelComponent } from './features/search-panel/search-panel.component';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [
    SearchPanelComponent,
    DataTableComponent
  ],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'search-panel';

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  handleSearch(filters: any) {
    debugger;
    this.employeeService.getEmployees(filters).subscribe(data => {
      this.employees = data;
    });
  }
}
