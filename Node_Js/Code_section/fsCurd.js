const fs=require('fs');
// console.log(process.argv[2]);




const operation = process.argv[2];

if (operation === "write") {
    const name = process.argv[3];
    const content = process.argv[4];

    fs.writeFileSync(`file/${name}`, content);

    console.log("File created successfully.");
}
else if(operation=='read'){
    const name=process.argv[3];
    const fullName="file/"+name+".txt"
    let data=fs.readFileSync(fullName,"utf-8");
    console.log(data);
}
else if (operation === "update") {
    const name = process.argv[3];
    const content = process.argv[4];

    const fullName = "file/" + name + ".txt";

    fs.appendFileSync(fullName, content);

    console.log("File updated successfully.");
}
else if (operation === "delete") {
    const name = process.argv[3];

    const fullName = "file/" + name + ".txt";

    fs.unlinkSync(fullName);

    console.log("File deleted successfully.");
}
// fs.writeFileSync('file/apple.txt',"This is a fruit");
// const data=fs.readFileSync('file/apple.txt',"utf-8");
// console.log(data);

//  fs.appendFileSync("file/apple.txt","and this good for Health");
