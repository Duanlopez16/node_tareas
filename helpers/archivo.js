import fs from 'fs';

const ruta = './database/data.json';
const guardar = (data) => {
    fs.writeFileSync(ruta, JSON.stringify(data));
}

const leer_archivo = () => {
    if (!fs.existsSync(ruta)) {
        return null;
    }

    const info = fs.readFileSync(ruta, { encoding: 'utf-8' });
    let data = null;
    if (info) {
        data = JSON.parse(info);
    }
    return data;
}

export { guardar, leer_archivo };