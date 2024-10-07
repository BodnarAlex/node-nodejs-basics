import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathOld = path.resolve(__dirname, "files", "wrongFilename.txt");
const pathNew = path.resolve(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await fs.access(pathOld);
        try {
            await fs.access(pathNew);
            throw new Error("FS operation failed");
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error("FS operation failed");
            }
        }
        await fs.rename(pathOld, pathNew);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();