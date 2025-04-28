import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        const data = String(chunk).trim().split("").reverse().join("");
        callback(null, data + '\n');
    },
});

const transform = async () => {
    try {
        await pipeline(
            process.stdin,
            reverse,
            process.stdout
        );
    } catch (err) {
        console.error(err);
    }
};

await transform();