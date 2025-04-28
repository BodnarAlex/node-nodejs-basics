import { unlink } from 'fs/promises';
import path from "path";

const fileName = 'fileToRemove.txt';
const errorText = 'FS operation failed';

const __dirname = import.meta.dirname;
const pathToFile = path.resolve(__dirname, "files", fileName);

const remove = async () => {
    try {
        await unlink(pathToFile);
        console.log('File deleted successfully');
    } catch (error) {
        throw new Error(errorText);
    }
};

await remove();