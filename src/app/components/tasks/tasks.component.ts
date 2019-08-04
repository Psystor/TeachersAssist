import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Task } from './task.class';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'delete'];
  dataSource = new MatTableDataSource<Task>();

  delete(task: Task) {
    this.data.remove(task);
  }

  constructor(public data: TasksService) { }

  ngOnInit() {
    this.data.tasks$.subscribe(o => {
      this.dataSource.data = o;
    })
  }

}
