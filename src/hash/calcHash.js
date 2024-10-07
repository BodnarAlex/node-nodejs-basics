import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const stream = createReadStream(pathRead);
    const hash = createHash("sha256");

    let data = "";
    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => {
        const resultString = hash.update(data).digest('hex');
        console.log(resultString);
    });
    stream.on("error", (error) => console.log("Error", error.message));
};

await calculateHash();