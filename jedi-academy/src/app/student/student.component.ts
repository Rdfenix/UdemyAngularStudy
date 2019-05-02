import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

  cliked = () => {
    console.log(`Student: ${this.student.name}`)
  }

}
