import fs from "fs/promises";
import path from "path";

const __dirname = import.meta.dirname;
const pathToCatalog = path.resolve(__dirname, "files");

const list = async () => {
    try {
        const files = await fs.readdir(pathToCatalog);
        for (const file of files)
          console.log(file);
    } catch {
        throw new Error ("FS operation failed");
    }
};

await list();