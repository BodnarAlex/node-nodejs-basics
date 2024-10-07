import { Transform, pipeline } from "stream";

const transform = async () => {
    const transforming = new Transform({
        transform(chunk, enc, cb) {
            const reverse = chunk.toString().trim().split("").reverse().join("");
            this.push(reverse + "\n");
            cb();
        }
    })

    pipeline(
        process.stdin,
        transforming,
        process.stdout,
        err => {
            console.log(err)
        });
};

await transform();