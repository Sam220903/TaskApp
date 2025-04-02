const colors = require('colors');

const showMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log("===============================".green);
        console.log("==== Seleccione una opción ====".green);
        console.log("===============================".green);
        console.log(`${"1.".green} Crear tarea.`);
        console.log(`${"2.".green} Listar tareas.`);
        console.log(`${"3.".green} Listar tareas terminadas.`);
        console.log(`${"4.".green} Listar tareas pendientes.`);
        console.log(`${"5.".green} Completar tareas.`);
        console.log(`${"6.".green} Borrar tarea.`);
        console.log(`${"0.".green} Salir.`);

        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        readline.question("Seleccione una opción: ", (opt) => {
          resolve(opt);
        });
    })
};

const pause = () => {
    return new Promise(() => {
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        readline.question(
          "Presione cualquier tecla para continuar... ", (key) => {
            readline.close();
          }
        );
    })
}

module.exports = {
    showMenu,
    pause
}