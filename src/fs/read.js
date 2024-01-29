import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
    try {
        const content = await fs.readFile(pathRead, "utf8");
        console.log(content);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();