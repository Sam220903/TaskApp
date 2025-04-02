const Task = require('./models/task');
const Tasks = require('./models/tasks');

const task = new Task('Read book');
console.log(task);

const tasks = new Tasks();
tasks.list[task.id] = undefined;
