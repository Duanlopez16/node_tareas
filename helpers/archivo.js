import fs from 'fs';

const guardar = (data) => {
    const ruta = './database/data.json';
    fs.writeFileSync(ruta, JSON.stringify(data));
}


export { guardar };