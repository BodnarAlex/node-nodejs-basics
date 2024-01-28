import fs from "fs/promises";
import path from "path";

const __dirname = import.meta.dirname;
const pathToDelete = path.resolve(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await fs.unlink(pathToDelete);
    } catch {
        throw new Error ("FS operation failed");
    }
};

await remove();