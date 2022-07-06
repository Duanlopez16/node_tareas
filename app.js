import colors from 'colors';
import { inquirer_menu, inquirer_pausa, leer_input } from './helpers/inquirer.js';
import { Tareas } from './models/Tareas.js';

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    do {
        //esta opcion imprime el menu
        opt = await inquirer_menu();

        switch (opt) {
            case '1':
                const desc = await leer_input('Descripcion: ');
                tareas.crear_tarea(desc);
                break;
            case '2':
                console.log(tareas.listado_array);
                break;
        }

        await inquirer_pausa();

    } while (opt != '0');

}

main();