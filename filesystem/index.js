const fs = require('fs');
const path = require('path'); 
const fixPath = path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas!');
        return;
    }
    console.log(data);
}
fs.readFile(fixPath, 'UTF-8', fileReadCallback);