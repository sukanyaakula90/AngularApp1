import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students:Student[] | undefined 
  constructor(private _studService:StudentService){}


  ngOnInit(): void {
    this._studService.getData().subscribe((data:any)=>{
      this.students=data.records;
      console.log(this.students)
    });

  }
  
}
  
   
   

