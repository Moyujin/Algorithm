const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = num.split(" ");

const arr = input.map((item) => item.split(""));

const solution = (N, M, arr) => {
    let num = N > M ? M : N;
    let max = 1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 1; k < num; k++) {
                if (i + k >= N || j + k >= M) continue;
                if (max === M) break;
                if (
                    arr[i][j] === arr[i][j + k] &&
                    arr[i][j] === arr[i + k][j] &&
                    arr[i][j] === arr[i + k][j + k]
                ) {
                    if ((k + 1) * (k + 1) > max) max = (k + 1) * (k + 1);
                }
            }
        }
    }

    console.log(max);
};

solution(N, M, arr);
