import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToCatalog = path.resolve(__dirname, "files");

const list = async () => {
    try {
        const files = await fs.readdir(pathToCatalog);
        console.log(files);
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();