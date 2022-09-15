const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

const solution = (arr) => {
    let max = 0;
    let now = 0;

    for (let i = 0; i < arr.length; i++) {
        now += arr[i][1];
        now -= arr[i][0];
        if (now > max) max = now;
    }

    console.log(max);
};

solution(arr);
