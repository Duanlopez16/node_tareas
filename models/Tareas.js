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
}

export { Tareas };