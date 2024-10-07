const parseEnv = () => {
    let finalString = "";
    const env = process.env;
    const keysArray = Object.keys(env).filter((item) => item.startsWith("RSS_"));

    for (let keyValue of keysArray) {
        finalString += `${keyValue}=${env[keyValue]}; `;
    }
    console.log(finalString.slice(0, -2));
};

parseEnv();