import { fork } from 'node:child_process';
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToCp = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const child = fork(pathToCp, args, {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc']
    });

    child.on("error", (err) => {
        throw new Error(err);
    });
};

spawnChildProcess(["someArgument1", "someArgument2", 8, 7, 6, 5, 4, 3, 2, 1, "Win"]);
