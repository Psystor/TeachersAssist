import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Task } from '../task.class';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'task-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class TaskAddComponent implements OnInit {
  formGroup: FormGroup;
  @ViewChild('first', { static: true }) firstInput: ElementRef;

  onSubmit(data: { name: any; weight: any; }) {
    // Validator should take care, but just to be safe
    if (data.name && data.weight) {
  
      this.stored.add(new Task(data.name, data.weight));
      
      this.formGroup.reset();
      this.firstInput.nativeElement.focus();
    }
  }

  constructor(private stored: TasksService, private formBuilder: FormBuilder) {
      
    this.formGroup = this.formBuilder.group({
      name: '',
      weight: 1
    });
  }
  ngOnInit() {
  }

}
