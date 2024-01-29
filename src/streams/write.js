import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathWrite = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const stream = fs.createWriteStream(pathWrite, "utf-8");
    process.stdin.pipe(stream);
};

await write();