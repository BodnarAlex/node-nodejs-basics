import { readFile } from 'fs/promises';
import path from "path";

const fileName = 'fileToRead.txt';
const errorText = 'FS operation failed';

const __dirname = import.meta.dirname;
const pathToFile = path.resolve(__dirname, "files", fileName);

const read = async () => {
    try {
        const contents = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error(errorText);
    }
};

await read();