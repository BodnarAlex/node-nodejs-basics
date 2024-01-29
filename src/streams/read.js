import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathRead = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
    let data = "";
    const stream = fs.createReadStream(pathRead, "utf-8");

    stream.on("data", (chunk) => (data += chunk));
    stream.on("end", () => process.stdout.write(data));
    stream.on("error", (error) => console.log("Error", error.message));
};

await read();