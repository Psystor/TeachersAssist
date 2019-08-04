export class Task {
    weight = 1;
    name: string;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }
}