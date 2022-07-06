const { resolve } = require('path');

require('colors');

const mostrar_menu = () => {

    return new Promise(resolve => {
        console.log('===================='.green);
        console.log('  Elija una opcion '.green);
        console.log('====================\n'.green);

        console.log(`${'1.'.green} Crear tareas`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} completar tareas`);
        console.log(`${'5.'.green} Borrar Tarea`);
        console.log(`${'0.'.red } salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('elija la opcion:\n', (opt) => {
            readline.close();
            resolve(opt);
        });
    });


}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`PRESIONE ${'ENTER'.green} PARA CONTINUAR`, (opt) => {
            readline.close();
            resolve(opt);
        });
    });

}

module.exports = {
    mostrar_menu,
    pausa
};