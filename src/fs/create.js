import fs from "fs/promises";
import path from "path";

const __dirname = import.meta.dirname;
const PathTo = path.resolve(__dirname, "files", "fresh.txt");

const greeting = "I am fresh and young";

const create = async () => {
    try {
        fs.writeFile(PathTo, greeting, {flag: "wx"});
    } catch {
        throw new Error ("FS operation failed");
    }
};

await create();