const fs=require('fs');
const os=require('os');
const {log,warn}=require('console');
fs.writeFileSync("dummy","trying with module")
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
console.log(process.cwd());
console.log(process.pid);
log("custom Log")
warn("console.log");
