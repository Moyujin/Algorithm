const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => Number(item));
let res = [];

const solution = (arr) => {
    let sum = arr.reduce((sum, curr) => sum + curr);

    for (let i = 0; i < 8; i++) {
        if (res.length) break;
        for (let j = i + 1; j < 9; j++) {
            if (arr[i] + arr[j] === sum - 100) {
                res = arr.filter((_, idx) => idx !== i && idx !== j);
                break;
            }
        }
    }

    console.log(res.sort((a, b) => a - b).join("\n"));
};

solution(arr);
