import { readdir } from 'fs/promises';
import path from "path";

const errorText = 'FS operation failed';
const __dirname = import.meta.dirname;
const pathToCatalog = path.resolve(__dirname, "files");

const list = async () => {
    try {
        const files = await readdir(pathToCatalog);
        for (const file of files)
            console.log(file);
    } catch (err) {
        throw new Error(errorText);
    }
};

await list();