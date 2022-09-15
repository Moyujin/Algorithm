const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

N = N[0];
const profit = new Array(N).fill(0);

const solution = (n, idx) => {
    for (let i = 0; i < N; i++) {
        const [duration, cost] = arr[i];

        if (i + duration > n) continue;
        profit[i] += cost;

        for (let j = i + duration; j < N; j++) {
            profit[j] = Math.max(profit[i], profit[j]);
        }
    }
    console.log(Math.max(...profit));
};

solution(N, 0);
