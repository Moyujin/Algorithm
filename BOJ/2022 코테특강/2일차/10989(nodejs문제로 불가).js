const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(arr);
const solution = (N) => {
    let count = Array(10000).fill(0);
    let res = [];
    for (let i = 0; i < N; i++) {
        count[arr[i]]++;
    }

    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            for (let idx = 0; idx < count[i]; idx++) res.push(i);
        }
    }
    console.log(res.join("\n"));
};

solution(N);
