import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathOld = path.resolve(__dirname, "files", "wrongFilename.txt");
const pathNew = path.resolve(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await fs.rename(pathOld, pathNew);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();