import { Injectable } from '@angular/core';
import { Task } from './task.class';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private knownTasks: Task[] = [];
  private taskSrc = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSrc.asObservable();


  add(task: Task) {
    this.knownTasks.push(task);
    this.taskSrc.next(this.knownTasks);
    this.updateStored();
  }

  remove(task: Task) {
    let idx = this.knownTasks.indexOf(task);
    if ( idx !== -1) {
      this.knownTasks.splice(idx, 1);
      this.taskSrc.next(this.knownTasks);
      this.updateStored();
    }
  }

  // Dupicate of "pupilservice" - if required elsewhere create central routine
  private updateStored() {
    try {
      localStorage.setItem('knownTasks', JSON.stringify(this.knownTasks));
    } catch(e) {
      console.log(e);
    }
  }
  constructor() {
    let stored;
    try {
      stored = JSON.parse(localStorage.getItem('knownTasks'));
    } catch(e) {
      console.log('Json invalid or incognito mode activated');
      console.log(e);
    }
    if (stored) {
      for (let task of stored) {
        this.add(new Task(task.name, task.weight));
      }
    }}
}
