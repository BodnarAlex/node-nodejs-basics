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

    const promise = new Promise((resolve) => {
        const worker = new Worker(pathTo, {
            workerData: cpuNumb
        });

        worker.on("message", msg => {
            resolve({ status: "resolved", data: msg });
        })
        worker.on("error", err => {
            resolve({ status: "error", data: null });
        })
    })
    finalArray.push(promise);
    const result = await Promise.all(finalArray);
    console.log(result);
};

await performCalculations();