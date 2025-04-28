import { cp, access } from 'fs/promises';
import path from "path";
const errorText = 'FS operation failed';

const __dirname = import.meta.dirname;
const pathToCopyCatalog = path.resolve(__dirname, "files");
const pathToPasteCatalog = path.resolve(__dirname, "files_copy");

const copy = async () => {

    try {
        await access(pathToPasteCatalog);
        throw new Error(errorText);
    } catch (err) {
        if (err.code === 'ENOENT') {
            try {
                await cp(pathToCopyCatalog, pathToPasteCatalog, { recursive: true });
                console.log('Files copied successfully');
            } catch (copyError) {
                throw new Error(errorText);
            }
        } else {
            throw new Error(errorText);
        }
    }
};

await copy();
