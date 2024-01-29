import os from "os";
import path from "path";
import { fileURLToPath } from 'url';
import { Worker } from "worker_threads";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathTo = path.resolve(__dirname, "worker.js");

const performCalculations = async () => {

    let finalArray = [];
    const ten = 10;
    const cpuNumb = os.cpus().length;
    console.log("cpuNumb: ", cpuNumb);

    const worker = new Worker(pathTo, {
        workerData: cpuNumb
    });

    worker.on("message", msg => {
        finalArray.push({ status: "resolved", data: msg });
        console.log(finalArray);
    })
    worker.on("error", err => {
    finalArray.push({ status: "error", data: null });
    console.log(finalArray);
})
console.log(finalArray);
};

await performCalculations();