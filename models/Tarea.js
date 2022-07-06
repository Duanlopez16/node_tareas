import { v4 as uuidv4 } from 'uuid';


class Tarea {

    id = '';

    desc = '';

    completado_en = '';

    creado_en = '';

    constructor(desc) {
        let date = new Date();
        this.id = uuidv4();
        this.desc = desc;
        this.completado_en = '';
        this.creado_en = date.toLocaleDateString();
    }
}

export { Tarea };