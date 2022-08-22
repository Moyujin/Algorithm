const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];

const arr = input[1].split(" ").map((item) => +item);

const max = Math.max(...arr);
let mean = 0;

for (var i = 0; i < N; i++) {
    mean += (arr[i] / max) * 100;
}

console.log(mean / N);
