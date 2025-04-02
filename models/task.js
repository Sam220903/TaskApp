import { v4 as uuid } from 'uuid'

export class Task {
    id = '';
    description = '';
    completed = null;

    constructor(desc) {
        this.id = uuid();
        this.description = desc;
        this.completed = null;
    }
}
