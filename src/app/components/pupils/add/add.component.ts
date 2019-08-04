import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PupilsService } from '../pupils.service';
import { Pupil } from '../pupil.class';

@Component({
  selector: 'pupil-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formGroup: FormGroup;
  @ViewChild('first', { static: true }) firstInput: ElementRef;

  onSubmit(data: { firstName: any; lastName: any; }) {
    // Validator should take care, but just to be safe
    if (data.firstName && data.lastName) {
  
      this.stored.add(new Pupil(data.firstName, data.lastName));
      
      this.formGroup.reset();
      this.firstInput.nativeElement.focus();
    }
  }

  constructor(private stored: PupilsService, private formBuilder: FormBuilder) {
      
    this.formGroup = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }
  ngOnInit() {
  }

}
