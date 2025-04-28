import { fork } from 'node:child_process';
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToCp = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(pathToCp, args, {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc']
    });
};

spawnChildProcess(["someArgument1", "someArgument2", 8, 7, 6, 5, 4, 3, 2, 1, "Win"]);
