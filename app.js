import { getInput, inquirerMenu, pause, getTasksToDelete, confirm, selectList }  from './js/inquirer.js';
import { Tasks } from './models/tasks.js'
import { saveDB, loadDB } from './js/saveDB.js';
import { Task  } from './models/task.js';
import colors from 'colors';

const main = async() => {
    console.clear();
    let opt = -1;
    const tasks = new Tasks()
    do {
       opt = await inquirerMenu();
       const tasksDB = await loadDB();
       if(tasksDB){
         tasks.loadList(tasksDB);
       }

       switch (opt) {
        case 1:
            const resp = await getInput("Descripción: ");
            tasks.createTask(resp);
            break;
       
        case 2:
            tasks.printTasks();
            break;
        
        case 3:
            tasks.printByStatus(true); break;
            
        case 4: 
            tasks.printByStatus(false); break;

        case 5: 
            const completed = await selectList(tasks.listArray);
            tasks.changeTasks(completed);
            break;

        case 6: 
            const id = await getTasksToDelete(tasks.listArray);
            const ok = await confirm('¿Desea borrar la tarea?');
            if (ok) {
                tasks.deleteTask(id)
                console.log('Tarea borrada exitosamente'.green);
            }
            break;

        default:
            break;
       }

       saveDB(tasks.listArray);

       if(opt !== 0) await pause();
    } while (opt !== 0);

};

main();