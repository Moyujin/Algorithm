const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.sort();
let arr = [];

for (var i = 0, len = input.length; i < len - 1; i++) {
    if (input[i] === input[i + 1]) arr.push(input[i]);
}

console.log(arr.length);
for (var i = 0; i < arr.length; i++) console.log(arr[i]);
