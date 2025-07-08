import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-search-panel',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.css'
})
export class SearchPanelComponent {

  searchForm: FormGroup;
  @Output() search = new EventEmitter<any>();

  constructor(private fb: FormBuilder,private empService:EmployeeService) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      position: ['']
    });
  }

  onSearch() {
    
      this.search.emit(this.searchForm.value);
   

  }
}
