import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const stream = createReadStream(pathRead);
    const hash = createHash("sha256");

    try {
        await pipeline(stream, hash);
        console.log(hash.digest("hex"));
    } catch (err) {
        throw new Error(err.message);
    }
};

await calculateHash();