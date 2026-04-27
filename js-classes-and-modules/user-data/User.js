import { Task } from './Task.js';

export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    age = 1;
    tasks = [];

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setAge(newAge) {
        if (typeof newAge === 'number' && newAge > 0 && Number.isFinite(newAge)) {
            this.age = newAge;
        } else {
            console.warn('Invalid age value:', newAge);
        }
    }

    addTasks(tasks) {
        if (Array.isArray(tasks)) {
            tasks.forEach((task) => {
                if (task instanceof Task) {
                    this.tasks.push(task);
                }
            });
        }
    }

    getTasksCount() {
        return this.tasks.length;
    }
}
