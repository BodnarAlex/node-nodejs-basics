import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const stream = fs.createReadStream(pathRead, "utf-8");
    stream.on('data', chunk => {
        console.log(chunk);
    });
};

await read();