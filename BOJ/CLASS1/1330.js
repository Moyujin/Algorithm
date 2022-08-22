const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

if (+input[0] > +input[1]) console.log(">");
else if (+input[0] < +input[1]) console.log("<");
else console.log("==");
