import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const data = workerData;
    const info = nthFibonacci(data);
    parentPort.postMessage({ status: "resolved", data: info });
};

sendResult();