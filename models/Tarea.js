import { v4 as uuidv4 } from 'uuid';


class Tarea {
    id = '';
    desc = '';
    completado_en = '';

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completado_en = '';
    }
}

export { Tarea };