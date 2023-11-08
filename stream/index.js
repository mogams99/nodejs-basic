const fs = require('fs');
const path = require('path'); 
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream(outputPath);

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {``
        console.error(error);
    }
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('Berhasil melakukan proses stream!');
});