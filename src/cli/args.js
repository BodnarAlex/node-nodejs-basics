const parseArgs = () => {
    let finalString = "";
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
        if (i + 1 < args.length) {
            if (args[i].startsWith("--") && !args[i + 1].startsWith("--")) {
                finalString += `${args[i].slice(2)} is ${args[i + 1]}, `;
                i++;
            }
        }
    }
    console.log(finalString.slice(0, -2));
};

parseArgs();