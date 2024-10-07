import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToDelete = path.resolve(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await fs.unlink(pathToDelete);
    } catch {
        throw new Error("FS operation failed");
    }
};

await remove();