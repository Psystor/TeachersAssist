import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeacherAssist';

  pages = [
    {
      path: 'pupils',
      name: 'Schüler'
    },
    {
      path: 'tasks',
      name: 'Aufgaben'
    },
    {
      path: 'records',
      name: 'Noten'
    }
  ];
}
