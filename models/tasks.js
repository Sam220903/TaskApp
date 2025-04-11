import { Task } from "./task.js";
import colors from 'colors'

export class Tasks{

    constructor(){
       this.list = {}
    }

    createTask = (desc) => {
        const task = new Task(desc);
        this.list[task.id] = task;
    }

    get listArray(){
        const listArray = [];
        Object.keys(this.list).forEach((key) => {
            const task = this.list[key];
            listArray.push(task);
        });
        return listArray;
    }

    loadList = (array) => {
        array.forEach((task) => {
            this.list[task.id] = task;
        })
    }

    printTasks = () => {
        let output = '';
        let counter = 1;
        this.listArray.forEach((task) => {
            output = `${counter.toString().green} ${task.description} :: `;
            if(task.completed) {
                output += `${'Completado'.green}`;
            } else {
                output += `${'Pendiente'.red}`;
            }
            console.log(output);
            counter++;
        })
    }

    printByStatus = (status) => {
        let output = "";
        let counter = 1;
        if (status) {
            this.listArray.forEach( (task) => {
                if(task.completed !== null) {
                    output += `${counter.toString().green} ${task.description} :: ${'Completado'.green}`;
                }
                counter++;
            });
            console.log(output); 
        } else {
            this.listArray.forEach( (task) => {
                if(task.completed === null) {
                    output += `${counter.toString().green} ${task.description} :: ${'Pendiente'.red} \n`;
                }
                counter++;
            });
            console.log(output);
        }
    }

    deleteTask = (id) => {
        if (this.list[id]) {
            delete this.list[id];
        }
    }

    changeTasks = (ids = []) => {
        ids.forEach( (id) => {
            const task = this.list[id];
            if(!task.completed){
                task.completed = new Date().toISOString();
            }
        });
        this.listArray.forEach((task) => {
            if(!ids.includes(task.id)) {
                this.list[task.id].completed = null
            }
        });
    }
     
}



