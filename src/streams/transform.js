import { Transform, pipeline } from "stream";

const transform = async () => {
    const transforming = new Transform({
        transform(chunk, enc, cb) {
            const reversre = chunk.toString().trim().split("").reverse().join("");
            this.push(reversre + "\n");
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