import cp from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToCp = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const childProcess = cp.spawn('node', [pathToCp, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2", 8, 7, 6, 5, 4, 3, 2, 1, "Win"]);
