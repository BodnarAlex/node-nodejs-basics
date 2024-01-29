import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PathTo = path.resolve(__dirname, "files", "fresh.txt");

const greeting = "I am fresh and young";

const create = async () => {
    try {
        await fs.writeFile(PathTo, greeting, { flag: "wx" });
    } catch {
        throw new Error("FS operation failed");
    }
};

await create();