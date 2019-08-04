import { Pupil } from '../pupils/pupil.class';

export class Record {
    private innerPupil: Pupil;

    get name(): string {
        return this.innerPupil.firstName + ', '
         + this.innerPupil.name;
    }

    // getter only, no way to change this here...
    get pupil(): Pupil {
        return this.innerPupil;
    }

    constructor(pupil: Pupil) {
        this.innerPupil = pupil;
    }
}