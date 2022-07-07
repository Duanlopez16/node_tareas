import { Tarea } from "./tarea.js";

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crear_tarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    get listado_array() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargar_tareas(tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    }


    listado_tareas() {
        this.listado_array.forEach((tarea, key) => {
            const number_tarea = `${key+1}`.green;
            const { desc, completado_en } = tarea;
            const estado = completado_en ? 'completado'.green : 'pendiente'.red
            console.log(`${number_tarea}. ${desc} :: ${estado}`);
        });
    }

    tareas_completadas() {
        const tareas = this.listado_array.filter(salari => {
            if (salari.completado_en) {
                return salari
            }
        });
        if (!tareas.length === 0) {
            tareas.forEach((tarea, key) => {
                const number_tarea = `${key+1}`.green;
                const { desc, completado_en } = tarea;
                const estado = `${completado_en}`.green;
                console.log(`${number_tarea}. ${desc} :: ${estado}`);
            });
        } else {
            console.log('No se encontraron tareas completadas.');
        }
    }

    tareas_pendientes() {
        const tareas = this.listado_array.filter(salari => {
            if (!salari.completado_en) {
                return salari
            }
        });
        if (!tareas.length === 0) {
            tareas.forEach((tarea, key) => {
                const number_tarea = `${key+1}`.green;
                const { desc, completado_en } = tarea;
                const estado = 'pendiente'.red
                console.log(`${number_tarea}. ${desc} :: ${estado}`);
            });
        } else {
            console.log('No se encontraroon tareas pendientes.');
        }
    }

    borrar_tarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
}

export { Tareas };