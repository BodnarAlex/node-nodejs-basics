import { createWriteStream } from 'fs';
import path from "path";

const __dirname = import.meta.dirname;
const pathToFile = path.resolve(__dirname, "files", 'fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(pathToFile, { encoding: 'utf8' });

    stream.on('error', (err) => {
        console.error(err.message);
    });

    process.stdin.on('error', (err) => {
        console.error(err.message);
    });

    process.stdin.pipe(stream);
};

await write();