/**
 * Class to describe and handle a Pupil
 *
 */
export class Pupil {
    /**
     * Internal model of Names, from the outside it should be "xx.name" and "xx.firstName"
     */
    private names = {
        first: '',
        last: ''
    };

    get firstName(): string {
        return this.names.first;
    }
    get name(): string {
        return this.names.last;
    }

    set firstName(val: string) {
        this.names.first = val;
    }
    set name(val: string) {
        this.names.last = val;
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.name = lastName;
    }
}