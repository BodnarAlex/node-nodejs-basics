import fs from "fs";
import path from "path";
import zlib from "zlib";
import stream from "stream";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToCompress = path.resolve(__dirname, "files", "fileToCompress.txt");
const pathToZlib = path.resolve(__dirname, "files", "archive.gz");

const compress = async () => {
    const streamRead = fs.createReadStream(pathToCompress);
    const streamWrite = fs.createWriteStream(pathToZlib);
    const transform = zlib.createGzip();

    stream.pipeline(
        streamRead,
        transform,
        streamWrite,
        err => {
            if (err) throw err;
        });
};

await compress();