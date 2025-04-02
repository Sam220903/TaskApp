import fs from 'fs';

const filePath = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

const loadDB = () => {
    if(!fs.existsSync(filePath)){
        return null;
    }
    const tasks = fs.readFileSync(filePath, {encoding: 'utf-8'});
    return JSON.parse(tasks);
}

export { loadDB, saveDB }