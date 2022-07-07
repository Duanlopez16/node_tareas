import colors from 'colors';
import { guardar, leer_archivo } from './helpers/archivo.js';
import { connfirmar, inquirer_menu, inquirer_pausa, leer_input, listado_tareas_borrar } from './helpers/inquirer.js';
import { Tareas } from './models/Tareas.js';

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const data = leer_archivo();

    if (data) {
        tareas.cargar_tareas(data);
    }
    do {
        //esta opcion imprime el menu
        opt = await inquirer_menu();

        switch (opt) {
            case '1':
                const desc = await leer_input('Descripcion: ');
                tareas.crear_tarea(desc);
                break;
            case '2':
                tareas.listado_tareas();
                break;

            case '3':
                tareas.tareas_completadas();
                break;

            case '4':
                tareas.tareas_pendientes();
                break;

            case '6':
                const tarea_id = await listado_tareas_borrar(tareas.listado_array);

                if (tarea_id) {
                    if (tarea_id == '0') {
                        const ok = await confirmar('¿desea borrar?'.yellow);
                        if (ok) {
                            tareas.borrar_tarea(tarea_id);
                            console.log('se elimino la tarea correctamente.');
                        }
                    }
                } else {
                    console.log('No se encontraron tareas.'.red);
                }
                break;
        }
        // esta parte se encarga de guardar crear un archivo con las tareas
        guardar(tareas.listado_array);
        await inquirer_pausa();

    } while (opt != '0');

}

main();