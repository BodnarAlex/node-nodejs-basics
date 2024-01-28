import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFrom = path.resolve(__dirname, "files");
const pathTo = path.resolve(__dirname, "files_copy");

const copy = async (pathFrom, pathTo) => {
    try {
        const files = await fs.readdir(pathFrom, { withFileTypes: true });
        await fs.mkdir(pathTo);
        for (const file of files) {
            if (file.isFile())
                await fs.copyFile(path.resolve(pathFrom, file.name), path.resolve(pathTo, file.name));
            else
                await copy(path.resolve(pathFrom, file.name), path.resolve(pathTo, file.name));
        }
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy(pathFrom, pathTo);