const parseArgs = () => {
    const args = process.argv.slice(2);
    const newArr = Array.from({ length: 2 }, (item, i) =>
        args.slice(i * 2, (i + 1) * 2)
    );
    const finalString = newArr.reduce((prev, [key, value]) => {
        if (key.includes("--")) {
            key = key.replace("--", "");
            return `${prev}${key} is ${value}, `;
        }
    }, "")
    console.log(finalString);
};

parseArgs();