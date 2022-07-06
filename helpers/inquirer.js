import inquirer from 'inquirer';

import colors from 'colors';

const menu_opts = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [{
            value: '1',
            name: `${'1.'.green} Crear tareas`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} completar tareas`
        },
        {
            value: '6',
            name: `${'5.'.green} Borrar Tarea`
        },
        {
            value: '0',
            name: `${'0.'.red } salir\n`
        }
    ]
}];

const inquirer_menu = async() => {
    console.clear();
    console.log('===================='.green);
    console.log('  Elija una opcion '.green);
    console.log('====================\n'.green);

    const { opcion } = await inquirer.prompt(menu_opts);
    return opcion;
}


const inquirer_pausa = async() => {
    console.log('\n');
    await inquirer.prompt([{
        type: 'input',
        name: 'enter',
        message: `PRESIONE ${'ENTER'.green} PARA CONTINUAR`,
    }]);
}

const leer_input = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Ingrese un valor';
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export {
    inquirer_menu,
    inquirer_pausa,
    leer_input
}