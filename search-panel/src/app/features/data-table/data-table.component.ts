import { Component, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input() employees: Employee[] = [];

 ngOnChanges(changes: SimpleChanges): void {

  if (changes['employees'] && this.employees && this.employees.length > 0) {
    // Example: Access properties from the first employee
    const { firstName, lastName, address, phone, position } = this.employees[0];
    // You can now use these variables as needed
  }

  }


}
