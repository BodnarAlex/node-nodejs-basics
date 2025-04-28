import { createReadStream } from 'fs';
import path from "path";

const __dirname = import.meta.dirname;
const pathToFile = path.resolve(__dirname, "files", 'fileToRead.txt');

const read = async () => {
    const stream = createReadStream(pathToFile, { encoding: 'utf8' });

    // Second option
    // for await (const chunk of stream) {
    //     process.stdout.write(chunk + '\n');
    // }

    let data = "";
    stream.on("data", (chunk) => (data += chunk + '\n'));
    stream.on("end", () => process.stdout.write(data));
    stream.on("error", (error) => console.log("Error", error.message));
};

await read();