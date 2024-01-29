import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const stream = fs.createReadStream(pathRead);
    const hash = crypto.createHash("sha256");

    let data = "";
    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => {
        const resultString = hash.update(data).digest('hex');
        console.log(resultString);
    });
    stream.on("error", (error) => console.log("Error", error.message));
};

await calculateHash();