import { Component, OnInit } from '@angular/core';
import { Record } from './record.class';
import { MatTableDataSource } from '@angular/material';
import { PupilsService } from '../pupils/pupils.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Record>();

  constructor(public pupilService: PupilsService) { }

  ngOnInit() {
    this.pupilService.pupils$.subscribe(pupils => {
      for (let p of pupils) {
        this.dataSource.data.push(new Record(p));
      }
    });
  }

}
