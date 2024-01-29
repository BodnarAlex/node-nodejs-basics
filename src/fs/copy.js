import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFrom = path.resolve(__dirname, "files");
const pathTo = path.resolve(__dirname, "files_copy");

const copy = async () => {
    try {
        await fs.cp(pathFrom, pathTo, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();