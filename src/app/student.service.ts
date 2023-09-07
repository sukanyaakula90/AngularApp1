import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl="https://www.w3schools.com/angular/customers.php"; 
  constructor     (private http:HttpClient) { }
  getData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
  
}
