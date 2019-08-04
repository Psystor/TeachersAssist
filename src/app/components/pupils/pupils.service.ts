import { Injectable } from '@angular/core';
import { Pupil } from './pupil.class';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  private knownPupils: Pupil[] = [];

  private pupilsSrc = new BehaviorSubject<Pupil[]>(this.knownPupils);
  pupils$ = this.pupilsSrc.asObservable();


  add(pupil: Pupil) {
    // TODO: Check if pupil is already known!
    this.knownPupils.push(pupil);
    this.pupilsSrc.next(this.knownPupils);
    this.updateStored();
  }

  remove(pupil: Pupil) {
    let idx = this.knownPupils.indexOf(pupil);
    if ( idx !== -1) {
      this.knownPupils.splice(idx, 1);
      this.pupilsSrc.next(this.knownPupils);
      this.updateStored();
    }
  }

  private updateStored() {
    try {
      localStorage.setItem('knownPupils', JSON.stringify(this.knownPupils));
    } catch(e) {
      console.log(e);
    }
  }


  constructor() {
    let stored;
    try {
      stored = JSON.parse(localStorage.getItem('knownPupils'));
    } catch(e) {
      console.log('Json invalid or incognito mode activated');
      console.log(e);
    }
    if (stored) {
      for (let p of stored) {
        // TODO: create Pupil factory for dumped data (in Pupil class)
        this.add(new Pupil(p.names.first, p.names.last));
      }
    }
  }

}
