const parseArgs = () => {
    const args = process.argv.slice(2);
    let finalString = "";
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith("--")) {
            finalString = `${finalString}${args[i].slice(2)} is ${args[i + 1]}, `;
            i++;
        }
    }
    console.log(finalString.slice(0, -2));
};

parseArgs();

