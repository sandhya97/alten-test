import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees(filters: any): Observable<Employee[]> {
  let params = new HttpParams();
  Object.keys(filters).forEach(key => {
    if (filters[key]) {
      params = params.set(key, filters[key]);
    }
  });

  return this.http.get<Employee[]>(this.apiUrl, { params });
}
}
