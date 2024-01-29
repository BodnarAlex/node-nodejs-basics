const parseEnv = () => {
    let finalString = "";
    let env = process.env;
    const keys = Object.keys(env).filter((x) => x.startsWith("RSS_"));

    for(let keyValue of keys){
        finalString += `${keyValue}=${env[keyValue]}; `;
    }
    console.log(finalString.slice(0, -2));
};

parseEnv();