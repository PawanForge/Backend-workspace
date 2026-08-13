const fs = require('fs');

const operation = process.argv[2];

if (operation === 'write') {
    const name = process.argv[3];
    const content = process.argv[4];

    fs.writeFileSync(`file/${name}`, content);

    console.log("File Created");
}

if (operation === "read") {
    const name = process.argv[3];
    const data = fs.readFileSync(`file/${name}`, "utf-8");
    console.log(data);
}

if(operation==="update"){
    const name=process.argv[3];
    const content=process.argv[4];

    fs.appendFileSync(`file/${name}`,content);
    console.log("update  the data ");
}

if(operation==="delete"){
    const name=process.argv[3];
    fs.unlinkSync(`file/${name}`);
    console.log("Delete the file");
}