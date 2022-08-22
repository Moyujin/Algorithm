const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);

console.log(a + b);
