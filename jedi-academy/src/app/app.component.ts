import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studends: Student[] = [
    { name: 'Luke Skywalker', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia Skywalker', isJedi: false },

  ]
}
