const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

N = N[0];
const res = [];

const lowerBound = (num) => {
    let low = 0;
    let high = res.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (num <= res[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    res[low] = num;
};

const solution = (N, arr) => {
    arr.map((item) => lowerBound(item));

    console.log(res.length);
};

solution(N, arr);
