import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFrom = path.resolve(__dirname, "files");
const pathTo = path.resolve(__dirname, "files_copy");

const copy = async (from = pathFrom, to = pathTo) => {
    try {
        const files = await fs.readdir(from, { withFileTypes: true });
        await fs.mkdir(to);
        for (const file of files) {
            const copyFileFrom = path.resolve(from, file.name);
            const copyFileTo = path.resolve(to, file.name);

            if (file.isFile())
                await fs.copyFile(copyFileFrom, copyFileTo);
            else
                await copy(copyFileFrom, copyFileTo);
        }
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy();