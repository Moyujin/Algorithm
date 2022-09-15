const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => item.split(" ").map((i) => +i));
let sum = 0;
const solution = (N, 0) => {
    if (sum === N) {
        return;
    }

    so
};

solution(N, 0);
