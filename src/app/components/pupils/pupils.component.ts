import {Component, OnInit, ViewChild} from '@angular/core';
import { PupilsService } from './pupils.service';
import { MatTableDataSource } from '@angular/material';
import { Pupil } from './pupil.class';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss']
})
export class PupilsComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'name', 'delete'];
  dataSource = new MatTableDataSource<Pupil>();

  delete(pupil: Pupil) {
    this.data.remove(pupil);
  }

  constructor(public data: PupilsService) { }

  ngOnInit() {
    this.data.pupils$.subscribe(o => {
      this.dataSource.data = o;
    })
  }

}
