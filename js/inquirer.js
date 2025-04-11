import inquirer from 'inquirer';
import colors from 'colors'
import { validate } from 'uuid';


const menu = [
  {
    type: "list",
    name: "menu_opt",
    message: "Seleccione una opción",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Crear tarea.`,
      },
      {
        value: 2,
        name: `${"2.".green} Listar tareas.`,
      },
      {
        value: 3,
        name: `${"3.".green} Listar tareas terminadas.`,
      },
      {
        value: 4,
        name: `${"4.".green} Listar tareas pendientes.`,
      },
      {
        value: 5,
        name: `${"5.".green} Completar tarea.`,
      },
      {
        value: 6,
        name: `${"6.".green} Borrar tarea.`,
      },
      {
        value: 0,
        name: `${"0.".green} Salir.`,
      },
    ],
  },
];
 

const inquirerMenu = async() => {
    console.clear();
    console.log("===============================".green);
    console.log("              Menu             ".green);
    console.log("===============================".green);

    // Returns the selected option
    const { menu_opt } = await inquirer.prompt(menu);
    return menu_opt;
};

const pause = async() =>{
    await inquirer.prompt([{
        type: "input",
        name: "pause",
        message: "Presione cualquier tecla para continuar...".green,
    }]);
}

const getInput = async(message) => {
    let response = await inquirer.prompt([{
        type: "input",
        name: "response",
        message,
        validate: (input) => {
            if(input.length === 0) return "Entrada inválida, intente de nuevo";
            else return true; 
        }
    }]);
    return response.response;
}

const getTasksToDelete = async (tasks = []) => {
  let counter = 0;
  const choices = tasks.map((task) => {
      counter++;
      return {
        value : task.id,
        name : `${counter.toString().green} ${task.description}`
      }});
    const response = await inquirer.prompt([{
      type: "list",
      name : 'response',
      message : '¿Qué tarea desea borrar?',
      choices
    }])

    return response.response;
};

const confirm = async(message) => {
  const { ok } = await inquirer.prompt([{
    type : 'confirm',
    name : 'ok',
    message 
  }])
  return ok;
}

const selectList = async (list) => {
  const choices = list.map((task) => {
    return {
      value : task.id,
      name : task.description,
      checked : (task.completed) ? true : false
    }
  });
  const response = await inquirer.prompt([{
    type : 'checkbox',
    name : 'resp', 
    message : 'Marque las tareas completadas: ',
    choices
  }]);
  return response.response;
}

export { inquirerMenu, pause, getInput, getTasksToDelete, confirm, selectList };


